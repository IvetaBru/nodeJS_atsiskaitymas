import { Router } from 'express';
import { getBooks } from '../controllers/booksController.js';

const booksRouter = Router();

//gauti visas knygas
booksRouter.get('', getBooks);

// //gauti specifinę knygą
// booksRouter.get('/:_id', getSpecBook);

export default booksRouter;