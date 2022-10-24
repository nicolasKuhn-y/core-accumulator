import { Id, ValueObjectFactory } from "common-domain";
import { Amount } from "./value-objects/amount";
import { Type } from "./value-objects/type";
export declare const transactionFactory: ValueObjectFactory<{
    id: typeof Id;
    userId: typeof Id;
    type: typeof Type;
    amount: typeof Amount;
}, "id" | "userId" | "type" | "amount">;
//# sourceMappingURL=transaction.factory.d.ts.map