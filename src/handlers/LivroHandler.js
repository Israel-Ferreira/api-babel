import LivroController from '../controllers/LivroController';
import httpStatus from 'http-status';

const sendResp = (res,statusCode,data) => {
    res.status(statusCode).send({'result':data});
}

class LivroHandler {
    constructor(){ }

    async getAll(req,res,next){
        try{
            const rsp = await LivroController.getAllLivros();
            sendResp(res,httpStatus.OK,rsp);
        }catch(err){
            sendResp(res,httpStatus.NOT_FOUND,err.message);
        }
    }

    async getById(req,res,next){
        try{
            const { id } = req.params;
            const res = await LivroController.getLivroById(id);
            sendResp(res,httpStatus.OK,rsp);
        }catch(err){
            sendResp(res,httpStatus.INTERNAL_SERVER_ERROR,err.message)
        }
    }

    async postLivro(req,res,next){
        let obj = req.body;
        try{
            const rsp = await LivroController.adicionarLivro(obj);
            sendResp(res,httpStatus.CREATED,"Livro Adicionado com sucesso");
        }catch(err){
            sendResp(res, httpStatus.INTERNAL_SERVER_ERROR, err.message)
        }
    }


    async removeById(req,res,next){
        let { id } = req.params;

        try{
            const rsp = await LivroController.deleteLivro(id);
            sendResp(res,httpStatus.OK,rsp);
        }catch(err){
            sendResp(res, httpStatus.INTERNAL_SERVER_ERROR, err.message)
        }
        
    }


    async update(req,res,next){
        let { id } = req.params;
        let livroUp = req.body;

        try{
            const resp =  await LivroController.updateLivro(id,livroUp);
            sendResp(res, httpStatus.OK, "Livro Atualizado com sucesso")
        }catch(err){
            sendResp(res, httpStatus.OK, err)
        }

    }

}

export default new LivroHandler();