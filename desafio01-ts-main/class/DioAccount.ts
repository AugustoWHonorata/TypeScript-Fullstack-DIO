export abstract class DioAccount {
	private name: string;
	private readonly accountNumber: number;
	balance: number = 0;
	private status: boolean = true;

	constructor(name: string, accountNumber: number) {
		this.name = name;
		this.accountNumber = accountNumber;
	}

	setName = (name: string): void => {
		this.name = name;
		console.log("Nome alterado com sucesso!");
	};

	getName = (): string => {
		return this.name;
	};

	deposit = (value: number): void => {
		if (this.validateStatus() && value > 0) {
			this.balance += value;
			console.log(`Você depositou R$${value}. Saldo atual: R$${this.balance}`);
		} else {
			console.log("Depósito não realizado. Verifique o status da conta e o valor informado.");
		}
	};

	withdraw = (value: number): void => {
		if (this.validateStatus() && value > 0 && this.balance >= value) {
			this.balance -= value;
			console.log(`Você sacou R$${value}. Saldo atual: R$${this.balance}`);
		} else {
			console.log("Saque não realizado. Verifique o status da conta, o saldo e o valor informado.");
		}
	};

	getBalance = (): void => {
		console.log(this.balance);
	};

	private validateStatus = (): boolean => {
		if (this.status) {
			return this.status;
		}

		throw new Error("Conta inválida");
	};
}
