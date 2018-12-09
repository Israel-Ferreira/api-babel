import LivroController from '../controllers/LivroController';
import httpStatus from 'http-status';

const sendResp = (res,statusCode,data) => {
    res.status(statusCode).send({'result':data});
}

class LivroHandler {
    constructor(){ }

    getAll(req,res,next){
        LivroController.getAllLivros()
            .then(rsp => sendResp(res,httpStatus.OK,rsp))
            .catch(err => sendResp(res,httpStatus.NOT_FOUND,err.message));
    }

    getById(req,res,next){
        let { id } = req.params;
        LivroController.getLivroById(id)
            .then(rsp => sendResp(res,httpStatus.OK,rsp))
            .catch(err => sendResp(res,httpStatus.INTERNAL_SERVER_ERROR,er.message));
    }

    postLivro(req,res,next){
        let obj = res.body;
        LivroController.adicionarLivro(obj)
            .then(rsp => sendResp(res,httpStatus.CREATED,rsp))
            .catch(err => sendResp(res,httpStatus.INTERNAL_SERVER_ERROR,err.message));
    }


    removeById(req,res,next){
        let { id } = req.params;
        LivroController.deleteLivro(id)
            .then(rsp => sendResp(res,httpStatus.OK,rsp))
            .catch(err => sendResp(res,httpStatus.INTERNAL_SERVER_ERROR,err.message));
    }


    update(req,res,next){
        let { id } = req.params;
        let livroUp = res.body;

        LivroController.updateLivro(id,livroUp)
            .then(rsp => sendResp(res,httpStatus.OK,"Livro Atualizado com sucesso"))
            .catch(err => sendResp(res,httpStatus.OK,err));

    }

}

export default new LivroHandler();