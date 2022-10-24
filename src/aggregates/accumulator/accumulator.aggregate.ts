import { AggregateRoot, Id } from "common-domain";

// Events
import { AccumulatorCreatedEvent } from "./events/accumulator-created";

// Interfaces
import { AccumulatorProps } from "./interfaces/accumulator-props";
import { CreateAccumulatorDto } from "./interfaces/create-accumulator";

// Value objects & Entities
import { accumulatorFactory } from "./accumulator.factory";
import { Period } from "./entities/period";
import { Total } from "./value-objects/total";
import { Transaction } from "../transaction/transaction.aggregate";

export class Accumulator extends AggregateRoot {
	private readonly id: Id;
	private readonly userId: Id;
	private readonly total: Total;
	private readonly period: Period;

	constructor(props: AccumulatorProps) {
		super();
		this.id = props.id;
		this.userId = props.userId;
		this.total = props.total;
		this.period = props.period;
	}

	public static create(dto: CreateAccumulatorDto): Accumulator {
		const props: AccumulatorProps = accumulatorFactory.mapToCreate(dto, { acceptEmptyValues: true });

		const accumulatorCreated = new Accumulator(props);

		const createdAccumulatorEvent = new AccumulatorCreatedEvent({ id: accumulatorCreated.id });
		accumulatorCreated.saveEvent(createdAccumulatorEvent);

		return accumulatorCreated;
	}

	public static buildFromPrimitives(dto: CreateAccumulatorDto): Accumulator {
		const props: AccumulatorProps = accumulatorFactory.mapToCreate(dto, { acceptEmptyValues: true });

		return new Accumulator(props);
	}

	// TODO: Logica de cierra/reseteo del acumulador
	public close() {}

	// TODO: Logica del calculo
	public calculateTotal(transactions: Transaction[]) {
		// const transactions = this.rules.apply(transactions);
		// return transactions.reduce();
	}
}
