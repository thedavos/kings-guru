export interface League extends PartialLeague {
  id: number;
  uuid: string;
  createdAt: Date;
}

export interface LeagueToView extends PartialLeague {
  uuid: string;
  createdAt: Date;
}

export interface LeagueToAdd extends PartialLeague {}

export interface PartialLeague {
  name: string;
  slug: string;
  country: Nullable<string>;
  city: Nullable<string>;
  logo: Nullable<string>;
  foundationYear: Nullable<number>;
  website: Nullable<string>;
  twitterHandle: Nullable<string>;
  instagramHandle: Nullable<string>;
  numberOfTeams: number;
  description: Nullable<string>;
  rules: Nullable<string>;
  isActive: boolean;
  isVisible: boolean;
  updatedAt: Nullable<Date>;
}
