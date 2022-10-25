import { DomainEvent, Id } from 'common-domain'
import { Period } from '../entities/period'

type EventInput = {
  id: Id;
  userId: Id;
  period: Period;
};

export class AccumulatorCreatedEvent extends DomainEvent {
  constructor (props: EventInput) {
    super({
      id: props.id,
      type: 'ltv.accumulators.1.command.accumulator.create',
      attributes: {
        userId: props.userId.value,
        accumulatorId: props.id.value,
        startDate: props.period.value.startDate,
        endDate: props.period.value.endDate
      }
    })
  }
}
