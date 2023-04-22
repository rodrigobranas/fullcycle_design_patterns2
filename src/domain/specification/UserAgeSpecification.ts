import User from "../entity/User";
import { AbstractSpecification } from "./Specification";

export default class UserAgeSpecification extends AbstractSpecification<User> {

	isSatisfiedBy(user: User): boolean {
		return user.age >= 18;
	}
	
}
