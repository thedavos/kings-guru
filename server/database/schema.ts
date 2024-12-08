export { uuid, commonFields } from './schemas/common.schema';
export { leagues } from './schemas/leagues.schema';

// const PlayerStatus = {
//   ACTIVE: 'active',
//   FREE_AGENT: 'free_agent',
//   RETIRED: 'retired',
//   DRAFT: 'draft',
//   RESERVE: 'reserve',
//   STOCK: 'stock',
// } as const;
//
// const PlayerPosition = {
//   GOALKEEPER: 'goalkeeper',
//   DEFENDER: 'defender',
//   MIDFIELDER: 'midfielder',
//   FORWARD: 'forward',
//   WINGER: 'winger',
//   PIVOT: 'pivot',
// } as const;
//
// Tipos de modo de juego
// const PlayMode = {
//   WITH_BALL: 'with_ball',
//   WITHOUT_BALL: 'without_ball',
//   NONE: 'none',
// } as const;

// Tipos de equipo en la alineación
// const TeamType = {
//   MAIN: 'main',
//   OPPONENT: 'opponent',
// } as const;

// Enumeración para los tipos de transferencia
// export const TransferType = {
//   SIGNING: 'signing',
//   LOAN: 'loan',
//   RETURN_FROM_LOAN: 'return_from_loan',
//   FREE_AGENT: 'free_agent',
//   DRAFT_PICK: 'draft_pick',
//   TEMPORARY_REPLACEMENT: 'temporary_replacement', // Nuevo tipo para reemplazos de la bolsa de jugadores
//   RETURN_TO_PLAYER_POOL: 'return_to_player_pool', // Para cuando un jugador vuelve a la bolsa
// } as const;

// export const todos = sqliteTable('todos', {
//   id: integer('id').primaryKey(),
//   userId: integer('user_id').notNull(), // GitHub Id
//   title: text('title').notNull(),
//   completed: integer('completed').notNull().default(0),
//   createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
// });

// Tabla para las temporadas
// export const seasons = sqliteTable('seasons', {
//   id: integer('id').primaryKey(),
//   uuid: uuid().unique().notNull(),
//   name: text('name').notNull(), // Ejemplo: "2023/2024"
//   startDate: integer('start_date', { mode: 'timestamp' }).notNull(),
//   endDate: integer('end_date', { mode: 'timestamp' }).notNull(),
//   leagueId: integer('league_id').references(() => leagues.id).notNull(),
//   isActive: integer('is_active', { mode: 'boolean' }).notNull().default(false),
//   ...commonFields,
// });

// export const teams = sqliteTable('teams', {
//   id: integer('id').primaryKey(),
//   uuid: uuid().unique().notNull(),
//   name: text('name').notNull(),
//   logo: text('logo'),
//   foundationYear: integer('foundation_year'),
//   leagueId: integer('league_id').references(() => leagues.id),
//   ...commonFields,
// });

// Tabla para los splits
// export const splits = sqliteTable('splits', {
//   id: integer('id').primaryKey(),
//   uuid: uuid().unique().notNull(),
//   name: text('name').notNull(), // Ejemplo: "Split 1", "Split 2"
//   seasonId: integer('season_id').references(() => seasons.id).notNull(),
//   startDate: integer('start_date', { mode: 'timestamp' }).notNull(),
//   endDate: integer('end_date', { mode: 'timestamp' }).notNull(),
//   isActive: integer('is_active', { mode: 'boolean' }).notNull().default(false),
//   ...commonFields,
// });

// export const presidents = sqliteTable('presidents', {
//   id: integer('id').primaryKey(),
//   uuid: uuid().unique().notNull(),
//   name: text('name').notNull(),
//   slug: text('slug').notNull().unique(),
//   image: text('image'),
//   twitter: text('twitter'),
//   instagram: text('instagram'),
//   twitch: text('twitch'),
//   youtube: text('youtube'),
//   tiktok: text('tiktok'),
//   teamId: integer('team_id').references(() => teams.id),
//   ...commonFields,
// });

// export const players = sqliteTable('players', {
//   id: integer('id').primaryKey(),
//   uuid: uuid().unique().notNull(),
//   name: text('name').notNull(),
//   slug: text('slug').notNull().unique(),
//   nickname: text('nickname'),
//   dateOfBirth: text('date_of_birth'),
//   nationality: text('nationality'),
//   number: integer('number'),
//   height: real('height'), // en centímetros
//   weight: real('weight'), // en kilogramos
//   teamId: integer('team_id').references(() => teams.id),
//   status: text('status').notNull().default(PlayerStatus.DRAFT).$type<keyof typeof PlayerStatus>(),
//   draftYear: integer('draft_year'),
//   isInjured: integer('is_injured', { mode: 'boolean' }).notNull().default(false),
//   ...commonFields,
// });

// export const playerTeamHistory = sqliteTable('player_team_history', {
//   id: integer('id').primaryKey(),
//   playerId: integer('player_id').notNull().references(() => players.id),
//   teamId: integer('team_id').notNull().references(() => teams.id),
//   splitId: integer('split_id').notNull().references(() => splits.id),
//   startDate: integer('start_date', { mode: 'timestamp' }).notNull(), // Unix timestamp
//   endDate: integer('end_date'), // Unix timestamp, null si aún está en el equipo
//   transferType: text('transfer_type').notNull().$type<keyof typeof TransferType>(),
//   transferFee: real('transfer_fee'), // Monto de la transferencia, si aplica
//   loaningTeamId: integer('loaning_team_id').references(() => teams.id), // Para préstamos
//   jerseyNumber: integer('jersey_number'),
//   roleInTeam: text('role_in_team'), // Por ejemplo: 'starter', 'substitute', 'reserved'
//   replacedPlayerId: integer('replaced_player_id').references(() => players.id), // Para reemplazos temporales
//   replacementReason: text('replacement_reason'), // Por ejemplo: 'injury', 'suspension'
//   isInPlayerPool: integer('is_in_player_pool', { mode: 'boolean' }).notNull().default(false),
//   ...commonFields,
// });

// export const playerPositions = sqliteTable('player_positions', {
//   id: integer('id').primaryKey(),
//   playerId: integer('player_id').notNull().references(() => players.id),
//   position: text('position').notNull().$type<keyof typeof PlayerPosition>(),
//   isMain: integer('is_main', { mode: 'boolean' }).notNull().default(false),
//   ...commonFields,
// });

// Alineaciones personalizadas
// export const customLineups = sqliteTable('custom_lineups', {
//   id: integer('id').primaryKey(),
//   uuid: uuid().unique().notNull(),
//   // Nombre opcional que el usuario puede dar a su alineación
//   name: text('name'),
//   // Código corto para compartir fácilmente la alineación
//   shareCode: text('share_code').unique().notNull(),
//   description: text('description'),
//   // Formación del equipo principal
//   mainFormation: text('main_formation').notNull(), // "4-3-3", "4-4-2", etc.
//   // Formación del equipo rival (opcional)
//   opponentFormation: text('opponent_formation'),
//   // Indica si la alineación incluye un equipo rival
//   hasOpponent: integer('has_opponent', { mode: 'boolean' }).default(false),
//   // Modo de juego actual seleccionado (con balón, sin balón, ninguno)
//   playMode: text('play_mode').$type<keyof typeof PlayMode>().default('NONE'),
//   // Fecha de expiración de la alineación
//   expiresAt: integer('expires_at', { mode: 'timestamp' }),
//   ...commonFields,
// });

// Jugadores en la alineación (tanto equipo principal como rival)
// export const customLineupPlayers = sqliteTable('custom_lineup_players', {
//   id: integer('id').primaryKey(),
//   lineupId: integer('lineup_id').references(() => customLineups.id).notNull(),
//   playerId: integer('player_id').references(() => players.id).notNull(),
//   teamType: text('team_type').$type<keyof typeof TeamType>().notNull(),
//   // Posiciones con balón
//   withBallPositionX: integer('with_ball_position_x'),
//   withBallPositionY: integer('with_ball_position_y'),
//   // Posiciones sin balón
//   withoutBallPositionX: integer('without_ball_position_x'),
//   withoutBallPositionY: integer('without_ball_position_y'),
//   // Información general
//   position: text('position').$type<keyof typeof PlayerPosition>(),
//   isCaptain: integer('is_captain', { mode: 'boolean' }).default(false),
//   order: integer('order').notNull(),
//   role: text('role').$type<'STARTER' | 'SUBSTITUTE'>(),
//   // Rating general simple (1-10)
//   rating: integer('rating'),
//   ...commonFields,
// });

// export const matches = sqliteTable('matches', {
//   id: integer('id').primaryKey(),
//   competitionId: integer('competitionId').notNull().references(() => competitions.id),
//   homeTeamId: integer('home_team_id').notNull().references(() => teams.id),
//   awayTeamId: integer('away_team_id').notNull().references(() => teams.id),
//   matchDate: text('match_date'),
//   duration: integer('duration').notNull().default(40),
//   ...commonFields,
// });
