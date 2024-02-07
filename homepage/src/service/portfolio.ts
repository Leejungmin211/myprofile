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

export interface TeckStackData {
  id: string;
  name: string;
  description: string;
}
