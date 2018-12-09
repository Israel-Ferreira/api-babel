import app, { closeDbConn, conn } from './App';

const PORT = process.env.PORT || 6590;

app.listen(PORT,() => {
    console.log(`Servidor Iniciado na porta ${PORT}`)
});

process.on("SIGUSR2",() => {
    closeDbConn(conn,"nodemon restart",() => process.kill(process.pid,'SIGUSR2'));
});

process.on("SIGINT",() => {
    closeDbConn(conn,"A Conexão foi interrompida",() => process.exit(0));
});


