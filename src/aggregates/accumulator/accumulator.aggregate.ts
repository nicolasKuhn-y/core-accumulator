import { AggregateRoot, Id } from "common-domain/dist";

// Events
import { AccumulatorCreatedEvent } from "./events/accumulator-created";

// Interfaces
import { AccumulatorProps } from "./interfaces/accumulator-props";
import { CreateAccumulatorDto } from "./interfaces/create-accumulator";

import { Transaction } from "../transaction/transaction.aggregate";

export class Accumulator extends AggregateRoot<AccumulatorProps> {
	private readonly id: Id;
	private transactions: Transaction[];

	constructor(props: AccumulatorProps) {
		super(props);
		this.id = props.id;
		this.transactions = props.transactions;
	}

	public static create(dto: CreateAccumulatorDto): Accumulator {
		const id = new Id(dto.id);
		const operations = dto.operations.map((rawData) => Transaction.create(rawData));

		const accumulatorCreated = new Accumulator({ id, transactions: operations });
		accumulatorCreated.saveEvent(new AccumulatorCreatedEvent({ id }));

		return accumulatorCreated;
	}
}
