import { Book } from '../schemas/book.schema';

export class BookModel {

  get() {
    return new Promise((resolve, reject) => {
      Book.find().exec()
        .then(books => {
          resolve({
            status: 200, data: books
          })
        })
        .catch(err => reject(err));
    });

  }

  create(book) {
    return new Promise((resolve, reject) => {
      Book.create(book)
        .then(book => {
          console.log(book);
          resolve({
            status: 201, message: 'Book was created successfully', data: book
          })
        })
        .catch(err => reject(err));
    });

  }
}