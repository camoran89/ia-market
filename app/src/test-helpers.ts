import { ɵresolveComponentResources } from '@angular/core';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const appRoot = process.cwd();

const tryRead = async (filePath: string): Promise<string | null> => {
  try {
    return await fs.readFile(filePath, 'utf8');
  } catch {
    return null;
  }
};

const normalizeUrl = (url: string) => url.replace(/\\/g, '/');

const findResource = async (url: string): Promise<string | { text(): Promise<string>; status?: number }> => {
  const absoluteCandidate = path.resolve(appRoot, url);
  const content = await tryRead(absoluteCandidate);
  if (content !== null) {
    return content;
  }

  const suffix = normalizeUrl(url).replace(/^[./]+/, '');

  const walk = async (dir: string): Promise<string | null> => {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        const found = await walk(entryPath);
        if (found) return found;
      } else {
        const candidate = normalizeUrl(path.relative(appRoot, entryPath));
        if (candidate.endsWith(suffix)) {
          return entryPath;
        }
      }
    }
    return null;
  };

  const found = await walk(appRoot);
  if (found) {
    return await fs.readFile(found, 'utf8');
  }

  throw new Error(`Unable to resolve Angular resource: ${url}`);
};

export const resolveAngularComponentResources = async (): Promise<void> => {
  await ɵresolveComponentResources(findResource);
};
