import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import {createConnection, closeConnection} from './config/db';
import router from './routes/livrariaRouter';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// conexão com o banco de dados
export const conn = createConnection();

conn.on("connected",() => console.log(`Mongoose foi conectado`));


export const closeDbConn = (dbConn,mes,cb) => closeConnection(dbConn,mes,cb);

//usando injeção de Dependencia nas rotas
router(app);


export default app;