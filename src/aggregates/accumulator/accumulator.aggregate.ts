import { AggregateRoot, Id } from "common-domain";

// Events
import { AccumulatorCreatedEvent } from "./events/accumulator-created";
import { AccumulatorResetEvent } from "./events/accumulator-reset";

// Interfaces
import { AccumulatorProps } from "./interfaces/accumulator-props";
import { CreateAccumulatorDto } from "./interfaces/create-accumulator";

// Value objects & Entities
import { accumulatorFactory } from "./accumulator.factory";
import { Period } from "./entities/period";
import { Total } from "./value-objects/total";
import { Status } from "./value-objects/status";
import { Transaction } from "../transaction/transaction.aggregate";

export class Accumulator extends AggregateRoot {
	private readonly id: Id;
	private readonly userId: Id;
	private readonly total: Total;
	private readonly period: Period;
	private readonly status: Status;

	private constructor(props: AccumulatorProps) {
		super();
		this.id = props.id;
		this.userId = props.userId;
		this.total = props.total;
		this.period = props.period;
		this.status = props.status;
	}

	public static create(dto: CreateAccumulatorDto): Accumulator {
		const props: AccumulatorProps = accumulatorFactory.mapToCreate({ ...dto, id: dto.id || "", status: "open" });

		const accumulatorCreated = new Accumulator(props);

		const createdAccumulatorEvent = new AccumulatorCreatedEvent({
			id: accumulatorCreated.id,
			userId: accumulatorCreated.userId
		});

		accumulatorCreated.saveEvent(createdAccumulatorEvent);

		return accumulatorCreated;
	}

	public static rebuild(dto: Required<CreateAccumulatorDto>): Accumulator {
		const props: AccumulatorProps = accumulatorFactory.mapToCreate(dto);

		return new Accumulator(props);
	}

	public close() {
		this.status.close();

		this.saveEvent(new AccumulatorResetEvent());
	}

	public calculateTotal(transactions: Transaction[]): number {
		return transactions.reduce((tempTotal, transaction) => tempTotal + transaction.amount, 0);
	}
}
