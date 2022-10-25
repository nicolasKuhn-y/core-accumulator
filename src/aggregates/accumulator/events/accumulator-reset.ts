import { DomainEvent, Id } from "common-domain";

export class AccumulatorResetEvent extends DomainEvent {
	constructor() {
		super({
			id: new Id(),
			type: "ltv.accumulators.1.command.accumulator.reset"
		});
	}
}
