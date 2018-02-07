import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';

const bookSchema = new Schema({
  name: {
    type: String
  },
  link: {
    type: String
  }
}, {
    collection: 'Book'
  });

export const Book = mongoose.model('Book', bookSchema);