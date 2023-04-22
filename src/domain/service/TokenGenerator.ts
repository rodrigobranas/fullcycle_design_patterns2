import User from "../entity/User";
import { sign, verify } from "jsonwebtoken";

export default class TokenGenerator {

	constructor (readonly key: string) {
	}

	generate (user: User, expiresIn: number, issueDate: Date) {
		return sign({ email: user.email.getValue(), iat: issueDate.getTime(), expiresIn }, this.key);
	}

	verify (token: string): any {
		return verify(token, this.key);
	}
}
