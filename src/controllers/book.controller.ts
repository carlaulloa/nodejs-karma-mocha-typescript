import { Request, Response } from 'express';
import { BookModel } from '../models/book.model';

export const bookModel = new BookModel();

export class BookController {

  get(req: Request, res: Response, next) {
    bookModel.get()
      .then((result: any) => {
        res.status(result.status).json({
          message: result.message,
          data: result.data
        });
      })
      .catch(err => next(err));
  }

  create(req: Request, res: Response, next) {
    bookModel.create(req.body)
      .then((result: any) => {
        res.status(result.status).json({
          message: result.message,
          data: result.data
        });
      })
      .catch(err => next(err));
  }

}