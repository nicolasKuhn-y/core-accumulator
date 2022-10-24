import { AggregateRoot, Id } from "common-domain";

// Events
import { RecordedTransactionEvent } from "./events/registered-transaction";

// Interfaces
import { CreateTransactionDto } from "./interfaces/create-transaction";
import { TransactionProps } from "./interfaces/transaction-props";

// Value objects & Entities
import { transactionFactory } from "./transaction.factory";
import { Amount } from "./value-objects/amount";
import { Type } from "./value-objects/type";

export class Transaction extends AggregateRoot {
	private readonly id: Id;
	private readonly userId: Id;
	private readonly type: Type;
	private readonly _amount: Amount;

	private constructor(props: TransactionProps) {
		super();
		this.id = props.id;
		this._amount = props.amount;
		this.type = props.type;
		this.userId = props.userId;
	}

	public static record(dto: CreateTransactionDto): Transaction {
		const props: TransactionProps = transactionFactory.mapToCreate({ ...dto, id: dto.id || "" });

		const transactionRegistered = new Transaction(props);

		const transactionRecordedEvent = new RecordedTransactionEvent({ id: transactionRegistered.id });
		transactionRegistered.saveEvent(transactionRecordedEvent);

		return transactionRegistered;
	}

	public static rebuild(dto: Required<CreateTransactionDto>): Transaction {
		const props: TransactionProps = transactionFactory.mapToCreate(dto);

		return new Transaction(props);
	}

	public get amount(): number {
		return this._amount.value;
	}
}
