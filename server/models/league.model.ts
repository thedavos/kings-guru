import type { League } from 'root/types/leagues';

export class LeagueModel implements League {
  id: number;
  uuid: string;
  name: string;
  slug: string;
  country: string | null;
  city: string | null;
  logo: string | null;
  foundationYear: number | null;
  website: string | null;
  twitterHandle: string | null;
  instagramHandle: string | null;
  numberOfTeams: number;
  description: string | null;
  rules: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(league: League) {
    Object.assign(this, league);
  }

  isVisible: boolean;
}
