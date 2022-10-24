import { AggregateRoot } from "common-domain";
import { CreateTransactionDto } from "./interfaces/create-transaction";
import { TransactionProps } from "./interfaces/transaction-props";
export declare class Transaction extends AggregateRoot {
    private readonly id;
    private readonly userId;
    private readonly type;
    private readonly amount;
    constructor(props: TransactionProps);
    static record(dto: CreateTransactionDto): Transaction;
}
//# sourceMappingURL=transaction.aggregate.d.ts.map