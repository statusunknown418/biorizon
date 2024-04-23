import { sqliteGenerate } from 'drizzle-dbml-generator'; // Using Postgres for this example
import * as schema from './src/server/db/schema';

const out = './schema.dbml';
const relational = true;

sqliteGenerate({ schema, out, relational });