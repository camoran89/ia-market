import { promises as fs } from 'fs';
import path from 'path';
import { parseSqlFile } from './parse-sql-file.js';
import { sqlQueryRoot } from './sql-query-root.js';

export const loadQueries = async (fileName: string): Promise<Record<string, string>> => {
  const filePath = path.join(sqlQueryRoot, fileName);
  const content = await fs.readFile(filePath, 'utf8');
  return parseSqlFile(content);
};
