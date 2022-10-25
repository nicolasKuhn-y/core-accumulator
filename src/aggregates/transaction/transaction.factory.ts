import { Id, ValueObjectFactory } from 'common-domain'

import { Amount } from './value-objects/amount'
import { Type } from './value-objects/type'

export const transactionFactory = new ValueObjectFactory({
  id: Id,
  userId: Id,
  type: Type,
  amount: Amount
})
