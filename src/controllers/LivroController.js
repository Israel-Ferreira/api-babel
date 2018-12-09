import LivroRepository from "../repositories/LivroRepository";

class LivroController {
	constructor() {}

	getAllLivros() {
		return LivroRepository.find({});
	}

	getLivroById(id) {
		return LivroRepository.findById(id);
	}

	deleteLivro(id) {
		return LivroRepository.findByIdAndRemove(id);
    }
    
    adicionarLivro(obj){
        if (obj.nomeDoLivro === "" && obj.editora === "" && obj.autor === "" && obj.genero === "" ){
            throw new Error("Objeto Vazio");
        }else if(obj.genero === "Livro de Youtuber"){
            throw new Error("Não pode requisitar merda");
        }else{
            return LivroRepository.create(obj);
        }
    }

	updateLivro(id, obj) {
		if ( obj.nomeDoLivro !== "" && obj.editora !== "" && obj.autor !== "") {
            return LivroRepository.findByIdAndUpdate(id,obj);
		}
    }
    
}

export default new LivroController();
