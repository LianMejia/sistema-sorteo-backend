import 'dotenv/config';
import Server from './shared/infrastructure/server/server';

const server = new Server();

server.listen();
