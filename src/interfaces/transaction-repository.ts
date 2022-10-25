import { Id } from 'common-domain'

import { Transaction } from '../aggregates/transaction/transaction.aggregate'

export interface TransactionRepository {
    save(transactionAggregate: Transaction): Transaction;

    findById(id: Id): Transaction;

    delete(id: Id): Transaction;
}
