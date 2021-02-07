import dotenv from 'dotenv';

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';

dotenv.config({ path: `src/config/${envFile}` });

const { SERVER_PORT } = process.env;
const { MONGODB_URI } = process.env;

export default Object.freeze({ SERVER_PORT, MONGODB_URI });
