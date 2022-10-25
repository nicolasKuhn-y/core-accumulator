import { DomainEvent, Id } from 'common-domain'

type EventInput = {
  id: Id;
};

export class RecordedTransactionEvent extends DomainEvent {
  constructor (props: EventInput) {
    super({
      type: 'ltv.transactions.1.command.transaction.record',
      id: props.id,
      attributes: {}
    })
  }
}
