/**
 * Minimal D1 shapes so stubs typecheck before `@cloudflare/workers-types` is installed.
 * Replace with generated wrangler types once the Cloudflare adapter is wired.
 */

export interface D1PreparedStatement {
	bind(...values: unknown[]): D1PreparedStatement;
	first<T = unknown>(colName?: string): Promise<T | null>;
	run(): Promise<unknown>;
	all<T = unknown>(): Promise<{ results: T[] }>;
}

export interface D1Database {
	prepare(query: string): D1PreparedStatement;
}
