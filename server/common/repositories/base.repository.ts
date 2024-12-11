import type { SQLiteTable } from 'drizzle-orm/sqlite-core';
import type { SQL } from 'drizzle-orm';
import type { IRepository } from 'server/common/repositories/repository.interface';
import type { DatabaseService } from 'server/database';
import type { LoggerService } from 'server/common/services/logger.service';

export class BaseRepository<T> implements IRepository<T> {
  protected tableName: string;
  protected table: SQLiteTable;

  constructor(
    protected readonly db: DatabaseService,
    protected readonly logger: LoggerService,
  ) {}

  async create(data: Partial<T>): Promise<T> {
    this.logger.debug(`Creating in ${this.tableName}`, { data });

    const recordCreated = (await this.db.value.insert(this.table).values(data).returning())[0];

    return recordCreated as T;
  }

  async findAll(query: SQL | undefined = undefined): Promise<T[]> {
    this.logger.debug(`Searching in ${this.tableName}`);

    const records = await this.db.value.select().from(this.table).where(query).all();

    return records as T[];
  }

  async findManyWith(relation: string): Promise<T[]> {
    const query = this.db.value.query;
    const records = await query[this.tableName as keyof typeof query].findMany({
      with: {
        [relation]: true,
      },
    });

    return records as T[];
  }

  // async findOne(id: number): Promise<T | null> {
  //   try {
  //     const result = await this.db.instance
  //       .select()
  //       .from(this.table)
  //       .where(eq(this.table.id, id))
  //       .limit(1);
  //
  //     return result[0] as T || null;
  //   }
  //   catch (e) {
  //     const error = e as KGError;
  //     this.logger.error(`Error finding ${this.tableName}`, error.stack);
  //     throw error;
  //   }
  // }
  //
  // async findOneBy(key: keyof SQLiteTable, value: never) {
  //   try {
  //     const record = (await this.db.instance.select().from(this.table).where(
  //       and(
  //         ...[
  //           eq(this.table[key] as never, value),
  //         ].filter(Boolean),
  //       ),
  //     ).limit(1))[0];
  //
  //     const r = record as InferSelectModel<T>;
  //
  //     return r || null;
  // const conditions = Object.entries(where).map(
  //   ([key, value]) => eq(this.table[key], value),
  // );
  //
  // const result = await this.db.instance
  //   .select()
  //   .from(this.table)
  //   .where(and(...conditions))
  //   .limit(1);
  //
  // return result[0] as T || null;
  //   }
  //   catch (e) {
  //     const error = e as KGError;
  //     this.logger.error(`Error finding ${this.tableName} by conditions`, error.stack);
  //     throw error;
  //   }
  // }
  //
  // delete(id: number): Promise<boolean> {
  //   const result = this.db.instance.delete(this.table).where(eq(this.table.id, id)) as D1Result;
  //
  //   return result.rowCount > 0;
  // }
}
