import type { SQLiteTable } from 'drizzle-orm/sqlite-core';
// import type { QueryOptions } from '../types/query.types';
// import type { IEntity } from './entity.interface';

export interface IRepository<T extends SQLiteTable> {
  // create(data: Partial<T>): Promise<T>;
  // findOne?(id: number): Promise<T | null>;
  // findOneBy?(key: keyof T, value: never): Promise<T | null>;
  // find?(options?: QueryOptions): Promise<T[]>;
  // findAndCount?(options?: QueryOptions): Promise<[T[], number]>;
  // paginate(options: PaginationOptions & QueryOptions): Promise<PaginatedResult<T>>;
  // update?(id: number, data: Partial<T>): Promise<T>;
  // delete?(id: number): Promise<void>;
  // deactivate?(id: number): Promise<void>;
  // restore?(id: number): Promise<void>;
  // transaction?<R>(callback: (repository: IRepository<T>) => Promise<R>): Promise<R>;
}
