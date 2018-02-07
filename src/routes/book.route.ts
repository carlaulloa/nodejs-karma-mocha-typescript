import { Router } from 'express';
import { BookController } from '../controllers/book.controller';

export const bookController = new BookController();

export function bookApi() {
  const router = Router();

  router.get('/books', bookController.get);

  router.post('/books', bookController.create);

  return router;
}