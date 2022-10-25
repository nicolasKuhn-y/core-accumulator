import { Id } from 'common-domain'

import { Accumulator } from '../../aggregates/accumulator/accumulator.aggregate'
import { AccumulatorCreatedEvent } from '../../aggregates/accumulator/events/accumulator-created'
import { AccumulatorResetEvent } from '../../aggregates/accumulator/events/accumulator-reset'
import { CreateAccumulatorDto } from '../../aggregates/accumulator/interfaces/create-accumulator'

import { Transaction } from '../../aggregates/transaction/transaction.aggregate'
import { TransactionType } from '../../aggregates/transaction/value-objects/type'

describe('Test suite for the Accumulator aggregate', () => {
  it('should create a new aggregate', () => {
    const dto: CreateAccumulatorDto = {
      userId: new Id().value,
      period: { startDate: new Date() },
      total: 0
    }

    const accumulator = Accumulator.create(dto)

    expect(accumulator).toBeInstanceOf(Accumulator)
  })

  it('should emit an AccumulatorCreatedEvent when Accumulator is created', () => {
    const dto: CreateAccumulatorDto = {
      userId: new Id().value,
      period: { startDate: new Date() },
      total: 0
    }

    const accumulator = Accumulator.create(dto)

    expect(accumulator.getLastEvent()).toBeInstanceOf(AccumulatorCreatedEvent)
  })

  it('should rebuild an accumulator from persistence', () => {
    const dto: Required<CreateAccumulatorDto> = {
      id: new Id().value,
      userId: new Id().value,
      period: { startDate: new Date() },
      status: 'close',
      total: 5000
    }

    const accumulator = Accumulator.rebuild(dto)

    expect(accumulator).toBeInstanceOf(Accumulator)
  })

  it('should emit an AccumulatorResetEvent when the accumulator is close', () => {
    const dto: CreateAccumulatorDto = {
      userId: new Id().value,
      period: { startDate: new Date() },
      total: 0
    }
    const accumulator = Accumulator.create(dto)

    accumulator.close()

    expect(accumulator.getLastEvent()).toBeInstanceOf(AccumulatorResetEvent)
  })

  it('should calculate the total accumulated from the transactions amount', () => {
    const transaction1 = createTransaction('QR', 750)
    const transaction2 = createTransaction('servicePayment', 500)
    const transaction3 = createTransaction('QR', 1000)
    const dto: Required<CreateAccumulatorDto> = {
      id: new Id().value,
      userId: new Id().value,
      period: { startDate: new Date(), endDate: new Date() },
      status: 'open',
      total: 5000
    }
    const accumulator = Accumulator.rebuild(dto)

    const totalCalculated = accumulator.calculateTotal([transaction1, transaction2, transaction3])

    expect(totalCalculated).toBe(2250)
  })
})

function createTransaction (type: TransactionType, amount: number): Transaction {
  return Transaction.rebuild({
    id: new Id().value,
    userId: new Id().value,
    type,
    amount
  })
}
