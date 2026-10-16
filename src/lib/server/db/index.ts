import { drizzle } from 'drizzle-orm/d1';
import type { D1Database } from './types';
import * as schema from './schema';

export const getDb = (d1: D1Database) => drizzle(d1, { schema });

export type { D1Database } from './types';
export * from './schema';
