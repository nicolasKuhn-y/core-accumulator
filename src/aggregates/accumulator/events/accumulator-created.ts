import { DomainEvent, Id } from 'common-domain'

type EventInput = {
  id: Id;
  userId: Id;
};

export class AccumulatorCreatedEvent extends DomainEvent {
  constructor (input: EventInput) {
    super({
      id: input.id,
      type: 'ltv.accumulators.1.command.accumulator.create',
      attributes: {
        userId: input.userId.value,
        accumulatorId: input.id.value
      }
    })
  }
}
