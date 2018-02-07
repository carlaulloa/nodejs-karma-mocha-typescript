import { Router } from 'express';
import { bookApi } from './book.route';

export function apiRouter() {
  const router = Router();

  router.use(bookApi());

  return router;
}