import TokenGenerator from "../../domain/service/TokenGenerator";

export default class CheckAuth {

	constructor () {
	}

	async execute (token: string): Promise<Output> {
		const tokenGenerator = new TokenGenerator("secret");
		const payload = tokenGenerator.verify(token);
		return {
			email: payload.email
		}
	}
}

type Output = {
	email: string
}
