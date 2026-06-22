import 'zone.js';
import 'zone.js/testing';
import { ɵresolveComponentResources } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const appRoot = process.cwd();

const tryRead = async (filePath: string): Promise<string | null> => {
  try {
    const normalized = path.normalize(filePath);
    console.log('tryRead', normalized);
    return await fs.readFile(normalized, 'utf8');
  } catch (error) {
    return null;
  }
};

const normalizeUrl = (url: string) => url.replace(/\\/g, '/');

const findResource = async (url: string): Promise<string | { text(): Promise<string>; status?: number }> => {
  console.log('resolveComponentResources request:', url);

  if (url.startsWith('file://')) {
    try {
      const filePath = fileURLToPath(url);
      const result = await tryRead(filePath);
      if (result !== null) return result;
    } catch {
      // ignore
    }
  }

  const searchPaths = [
    path.resolve(appRoot, url),
    path.resolve(appRoot, 'src', url),
    path.resolve(appRoot, 'src', 'app', url),
    path.resolve(appRoot, 'src', 'app', url.replace(/^\.\//, ''))
  ];

  for (const candidate of searchPaths) {
    const content = await tryRead(candidate);
    if (content !== null) return content;
  }

  const suffix = normalizeUrl(url).replace(/^\/+/, '');
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

console.log('VITEST SETUP LOADED');
console.log('vitest.setup.ts loaded', process.cwd());

await ɵresolveComponentResources(findResource);
TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
