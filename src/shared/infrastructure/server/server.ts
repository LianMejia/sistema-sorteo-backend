import { Application } from 'express';
import express from 'express';
import cors from 'cors';
import errorHandler from '../middlewares/error-handler.middleware';
import router from '../routes/index.routes';
class Server {
  public app: Application;
  public port: string | undefined;
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.middlewares();
    this.routes();
  }

  routes() {
    this.app.use(router);
  }

  middlewares() {
    this.app.use(cors());
    // Lectura y parseo del body
    this.app.use(express.json());
    this.app.use(errorHandler);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}

export default Server;
