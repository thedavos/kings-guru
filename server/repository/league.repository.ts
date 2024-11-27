import { eq } from 'drizzle-orm';
import type { IBaseRepository } from 'server/repository/base.repository';
import type { League, LeagueToAdd } from '@@/types/leagues';
import { tables, useDB } from 'server/utils/db';

const LEAGUE_TABLE = tables.leagues;

export class LeagueRepository implements IBaseRepository<League> {
  async create(league: LeagueToAdd): Promise<League> {
    const result = await useDB().insert(LEAGUE_TABLE).values(league).returning() as League[];
    return result.at(0) as League;
  }

  async delete(id: number): Promise<boolean> {
    try {
      await this.update(id, { isVisible: false });
      return true;
    }
    catch (error) {
      return false;
    }
  }

  async hardDelete(id: number): Promise<boolean> {
    const result = await useDB().delete(LEAGUE_TABLE).where(eq(LEAGUE_TABLE.id, id));
    return result.meta.changes > 0;
  }

  findAll(): Promise<League[]> {
    return Promise.resolve([]);
  }

  async findById(id: number): Promise<League | null> {
    const result = await useDB().select().from(LEAGUE_TABLE).where(eq(LEAGUE_TABLE.id, id));
    return result.at(0) as League;
  }

  async findByUuid(uuid: string): Promise<League | null> {
    const result = await useDB().select().from(LEAGUE_TABLE).where(eq(LEAGUE_TABLE.uuid, uuid));
    return result.at(0) as League;
  }

  async update(id: number, league: Partial<League>): Promise<League | null> {
    const result = await useDB()
      .update(LEAGUE_TABLE)
      .set({ ...league, updatedAt: new Date() })
      .where(eq(LEAGUE_TABLE.id, id))
      .returning();

    return result.at(0) as League;
  }
}
