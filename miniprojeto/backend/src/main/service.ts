import app from './app'
//import { Sequelize } from 'sequelize'
import {InMemoryUserRepository} from '../infra/outbound/repository/repository'
import {CreateUserCase} from '../core/use-cases/userCaseCreate'

const PORT: number = Number(process.env.PORT)

function startServer(): void {
  try {
    //sqlize

    const userRepository = new InMemoryUserRepository();

// 2. Injeta o repositório no Caso de Uso
const createUserCase = new CreateUserCase(userRepository);
    app.listen(PORT, () => {
      console.log(`Servidor rodando em modo IN-MEMORY.`);
      console.log(`Local: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(' Erro crítico ao iniciar o servidor:', error);
    process.exit(1);
  }
}

startServer();