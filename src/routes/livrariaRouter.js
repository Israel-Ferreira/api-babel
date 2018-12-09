import LivroHandler from '../handlers/LivroHandler';

export default (app) => {
    app.get('/', (req,res,next) => res.send({message:"Hello Man"}));
    app.get('/v1/livros',LivroHandler.getAll);
    app.post('/v1/livros/newlivro',LivroHandler.postLivro);
    app.get('/v1/livros/:id',LivroHandler.getById);
    app.put('/v1/livros/:id',LivroHandler.update);
    app.delete('/v1/livros/:id',LivroHandler.removeById);
}