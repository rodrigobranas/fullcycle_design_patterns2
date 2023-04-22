import Email from "../../src/domain/entity/Email";

test("Deve criar um email válido", function () {
	const email = new Email("john.doe@gmail.com");
	expect(email.getValue()).toBe("john.doe@gmail.com");
});

test("Não deve criar um email inválido", function () {
	expect(() => new Email("john.doe@gmail")).toThrow(new Error("Invalid email"));
});