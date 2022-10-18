import { NumberValueObject } from "common-domain/dist";

import { Type } from "../../value-objects/type";

import { CreateTransactionDto } from "./interfaces/create-transaction";
import { TransactionProps } from "./interfaces/transaction-props";

export class Transaction {
	private type: Type;
	private amount: NumberValueObject;

	constructor(props: TransactionProps) {
		this.amount = props.amount;
		this.type = props.type;
	}

	public static create(dto: CreateTransactionDto): Transaction {
		const type = new Type(dto.type);
		const amount = new NumberValueObject(dto.amount || 0);

		return new Transaction({ type, amount });
	}
}
