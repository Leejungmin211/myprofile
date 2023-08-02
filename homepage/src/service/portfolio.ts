import { readFile } from 'fs/promises';
import path from 'path';

export interface PortfolioData {
  id: string;
  name: string;
  date: string;
  path: string;
  content: string;
  github: string;
  homepage: string;
  stack: string[];
}

export async function getPortfolioData(): Promise<PortfolioData[]> {
  const filePath = path.join(process.cwd(), 'data', 'portfolio.json');
  return readFile(filePath, 'utf-8')
    .then<PortfolioData[]>(JSON.parse)
    .then((data) => data);
}
