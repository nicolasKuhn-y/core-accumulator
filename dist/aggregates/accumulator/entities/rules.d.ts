import { Transaction } from "../../transaction/transaction.aggregate";
export declare class AccumulatorRules {
    private readonly accumulatorId;
    constructor();
    static create(): void;
    apply(transactions: Transaction[]): Transaction[];
}
//# sourceMappingURL=rules.d.ts.map