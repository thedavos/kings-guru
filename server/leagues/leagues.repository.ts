import 'reflect-metadata';
import { injectable } from 'tsyringe';
import { BaseRepository } from '@@/server/common/repositories/base.repository';
import type { League } from '@@/server/database/schemas/leagues.schema';

@injectable()
export class LeaguesRepository extends BaseRepository<League> {}
