import { Router, Request, Response } from 'express';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' });
});

export default routes;