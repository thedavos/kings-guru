import 'reflect-metadata';
import { container } from 'tsyringe';
import { DatabaseService } from 'server/database';
import { LoggerService } from 'server/common/services/logger.service';
import leaguesModule from 'server/leagues/leagues.module';
import { registerModule } from './registerModule';

export function setupContainer() {
  container.registerSingleton(LoggerService);
  container.registerSingleton(DatabaseService);
  registerModule(leaguesModule);
}
