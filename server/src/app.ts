import express, { Express } from 'express';
import bodyParser from "body-parser";
import cors from 'cors';

import routes from './router';

class App {
  server: Express;

  constructor() {
    // Init var express
    this.server = express();

    // Insert routes
    this.routes();

    // Insert middlewares (cors, sessions...)
    this.middlewares();
  };

  routes() {
    this.server.use(routes);
  };

  middlewares() {
    this.server.use(cors());

    this.server.use(bodyParser.json({ limit: '50mb' }));
    this.server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  };
};

export default new App().server;