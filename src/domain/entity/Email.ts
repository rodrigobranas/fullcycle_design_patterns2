export default class Email {
	private value: string;

	constructor (email: string) {
		if(!String(email).toLowerCase().match(/^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/)) {
			throw new Error("Invalid email");
		}
		this.value = email;
	}

	getValue () {
		return this.value;
	}
}
