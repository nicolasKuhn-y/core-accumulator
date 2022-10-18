import { DomainEvent, Id } from "common-domain/dist";

type EventInput = {
	id: Id;
};

export class AccumulatorCreatedEvent extends DomainEvent {
	constructor(input: EventInput) {
		super({
			id: input.id,
			type: "ltv.qsy.1.created-accumulator"
		});
	}
}
