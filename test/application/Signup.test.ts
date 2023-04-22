import Login from "../../src/application/usecase/Login";
import Signup from "../../src/application/usecase/Signup";
import UserRepositoryMemory from "../../src/infra/repository/memory/UserRepositoryMemory";

test("Deve fazer o signup", async function () {
	const userRepository = new UserRepositoryMemory();
	const signup = new Signup(userRepository);
	const inputSignup = {
		name: "John Doe",
		email: "john.doe@gmail.com",
		password: "12354678",
		age: 30
	};
	await signup.execute(inputSignup);
	const login = new Login(userRepository);
	const inputLogin = {
		email: "john.doe@gmail.com",
		password: "12354678"
	}
	const output = await login.execute(inputLogin);
	expect(output.name).toBe("John Doe");
	expect(output.token).toBe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lQGdtYWlsLmNvbSIsImlhdCI6MTY3NzY3NTYwMDAwMCwiZXhwaXJlc0luIjoxMDAwMDAwMDAwfQ.bvyYJjaz64mFHwSPU4s8JQybiOivf8Mlc1ko0UsyP4Q");
});
