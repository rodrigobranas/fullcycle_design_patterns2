import User from "../../domain/entity/User";

export default interface UserRepository {
	save (user: User): Promise<void>;
	getByEmail (email: string): Promise<User | undefined>;
}
