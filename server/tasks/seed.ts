import { useDB, tables } from '../utils/db';
import leagues from '../database/data/leagues.json';

export default defineTask({
  meta: {
    name: 'db:seed',
    description: 'Run database seed task'
  },
  async run() {
    console.log('Running DB seed task...');
    await useDB().insert(tables.leagues).values(leagues);

    return { result: 'success' };
  }
});
