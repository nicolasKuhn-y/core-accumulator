import { Id } from 'common-domain'

import { RecordedTransactionEvent } from '../../aggregates/transaction/events/registered-transaction'
import { CreateTransactionDto } from '../../aggregates/transaction/interfaces/create-transaction'
import { Transaction } from '../../aggregates/transaction/transaction.aggregate'

describe('Test suite for Transaction aggregate', () => {
  it('should record a new transaction', () => {
    const dto: CreateTransactionDto = {
      amount: 500,
      type: 'QR',
      userId: new Id().value
    }

    const transaction = Transaction.record(dto)

    expect(transaction).toBeInstanceOf(Transaction)
  })

  it('should emit a TransactionRecordedEvent when the transaction is recorded', () => {
    const dto: CreateTransactionDto = {
      amount: 500,
      type: 'QR',
      userId: new Id().value
    }

    const transaction = Transaction.record(dto)

    expect(transaction.getLastEvent()).toBeInstanceOf(RecordedTransactionEvent)
  })

  it('should rebuild the aggregate from persistence', () => {
    const dto: Required<CreateTransactionDto> = {
      amount: 500,
      type: 'QR',
      userId: new Id().value,
      id: new Id().value
    }

    const transaction = Transaction.rebuild(dto)

    expect(transaction).toBeInstanceOf(Transaction)
  })
})
