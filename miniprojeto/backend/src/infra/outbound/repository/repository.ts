import { User } from '../../../core/entities/entitiesUser.js';
import { IUserRepository } from '../../../core/port/interfaceRepository.js';

export class InMemoryUserRepository implements IUserRepository {
    // Nosso "banco de dados" temporário
    private users: User[] = [];

    // Busca por ID
    async findById(id: User["id"]): Promise<User | null> {
        const user = this.users.find(u => u.id === id);
        return user || null;
    }

    // Busca por Nome (usado no seu CreateUserCase)
    async findByName(name: string): Promise<User | null> {
        const user = this.users.find(u => u.name === name);
        return user || null;
    }

    // Busca por Email (usado no seu CreateUserCase)
    async findByEmail(email: string): Promise<User | null> {
        const user = this.users.find(u => u.email === email);
        return user || null;
    }

    // Salva o usuário no array
    async save(user: User): Promise<void> {
        this.users.push(user);
        console.log(`[Repo] Usuário ${user.name} armazenado com sucesso.`);
    }

    // Retorna todos em formato de string (conforme sua interface anterior)
    async seeAll(): Promise<string> {
        return JSON.stringify(this.users, null, 2);
    }

    // Deleta um usuário
    async delete(id: User["id"]): Promise<void> {
        const index = this.users.findIndex(u => u.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
        }
    }

    async update(user: User): Promise<string>{
        return ""
    }
}