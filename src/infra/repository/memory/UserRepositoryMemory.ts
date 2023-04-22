import UserRepository from "../../../application/repository/UserRepository";
import User from "../../../domain/entity/User";

export default class UserRepositoryMemory implements UserRepository {
	users: User[];

	constructor () {
		this.users = [];
	}


	async save(user: User): Promise<void> {
		this.users.push(user);
	}

	async getByEmail(email: string): Promise<User | undefined> {
		return this.users.find((user: User) => user.email.getValue() === email);
	}

}