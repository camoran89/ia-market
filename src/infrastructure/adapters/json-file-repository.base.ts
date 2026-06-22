import { promises as fs } from 'fs';
import path from 'path';

export abstract class JsonFileRepositoryBase<T> {
  private readonly filePath: string;

  constructor(fileName: string) {
    this.filePath = path.resolve(process.cwd(), 'data', fileName);
  }

  protected async readRecords(): Promise<T[]> {
    await this.ensureFile();
    const content = await fs.readFile(this.filePath, 'utf8');
    return JSON.parse(content) as T[];
  }

  protected async saveRecords(records: T[]): Promise<void> {
    await this.ensureFile();
    await fs.writeFile(this.filePath, JSON.stringify(records, null, 2), 'utf8');
  }

  protected async ensureFile() {
    const dir = path.dirname(this.filePath);
    await fs.mkdir(dir, { recursive: true });

    try {
      await fs.access(this.filePath);
    } catch {
      await fs.writeFile(this.filePath, '[]', 'utf8');
    }
  }
}
