import mongoose from 'mongoose';
import LivroSchema from '../models/LivroSchema';

export default mongoose.model('Livro',LivroSchema,'livros');
