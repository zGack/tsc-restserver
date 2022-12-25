import express, { Application } from 'express';
import users_router from '../routes/user';
import cors from 'cors';
import db from '../db/connection';

class Server {

  private app: Application;
  private port: string;
  private apiPaths = {
    users: '/api/users'
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8080';


    // Init methods
    this.dbConnection();

    this.middlewares();

    // Definir las rutas
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log('DB online');
      
    } catch (error: any) {
      throw new Error(error);
    }
  }

  middlewares() {

    // CORS
    this.app.use(cors());

    // Lectura del body
    this.app.use(express.json())

    // Carpeta publica
    this.app.use(express.static('public'));

  }
  
  routes() {
    this.app.use(this.apiPaths.users, users_router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server running at port ' + this.port);
      
    })
  }

}

export default Server;