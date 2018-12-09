import { Schema } from 'mongoose';

const LivroSchema = new Schema({
    nomeDoLivro: {type: String, required: true},
    autor: {type: String, required: true},
    editora: {type: String,required: true},
    prateleira: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

LivroSchema.pre('save',() => {
    if(!this.createdAt){
        this.createdAt = new Date();
    }
})

export default LivroSchema;