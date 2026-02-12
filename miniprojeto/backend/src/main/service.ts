import app from './app'
import dbConfig from '../cofig/configDb'

const PORT: number = Number(process.env.PORT)

function startServer(): void {
  try {

    dbConfig.authenticate();
    console.log('Conexão bem sucedida com o banco de dados')

    dbConfig.sync({ force: false }); 
    console.log('Modelos sincronizados.');

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
    
  } catch (error) {
    console.error(' Erro crítico ao iniciar o servidor:', error);
    process.exit(1);
  }
}

startServer();