import { Id } from 'common-domain'

import { Amount } from '../value-objects/amount'
import { Type } from '../value-objects/type'

export interface TransactionProps {
    type: Type;
    amount: Amount;
    userId: Id
    id: Id
}
