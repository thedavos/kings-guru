import 'reflect-metadata';
import { injectable } from 'tsyringe';
import { logger } from 'server/common/decorators/logger.decorator';
import { BaseRepository } from 'server/common/repositories/base.repository';
import type { League } from 'server/database/schemas/leagues.schema';

@logger('leagues.repository')
@injectable()
export class LeaguesRepository extends BaseRepository<League> {}
