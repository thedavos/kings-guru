import { LeaguesRepository } from './leagues.repository';
import { LeaguesService } from './leagues.service';

export default {
  imports: [],
  services: [{
    token: 'LeaguesService',
    provide: LeaguesService,
  }],
  repositories: [{
    token: 'LeaguesRepository',
    provide: LeaguesRepository,
  }],
};
