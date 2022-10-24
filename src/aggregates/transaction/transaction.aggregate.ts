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
	private readonly amount: Amount;

	constructor(props: TransactionProps) {
		super();
		this.id = props.id;
		this.amount = props.amount;
		this.type = props.type;
		this.userId = props.userId;
	}

	public static record(dto: CreateTransactionDto): Transaction {
		const props: TransactionProps = transactionFactory.mapToCreate(
			{ ...dto, id: dto.id },
			{ acceptEmptyValues: true }
		);
		const isRecentlyCreated = dto.id === undefined;

		const transactionRegistered = new Transaction(props);

		if (isRecentlyCreated) {
			const transactionRecordedEvent = new RecordedTransactionEvent({ id: transactionRegistered.id });
			transactionRegistered.saveEvent(transactionRecordedEvent);
		}

		return transactionRegistered;
	}
}
