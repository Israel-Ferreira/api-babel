import mongoose from 'mongoose';

export const createConnection = () => {
    if(process.env.NODE_ENV === 'production'){
        mongoose.connect(process.env.MONGODB_URI);
    }else{
        mongoose.connect( "mongodb://192.168.99.100:27017/livraria", { useNewUrlParser: true } );
    }

    return _getConnection();
}

const _getConnection = () => mongoose.connection;


export const closeConnection =  (dbConn, message, callback) => {
    dbConn.close(() => {
        console.log(`O mongoose foi desconectado por ${message}`);
        callback();
    })
}