import { Id, ValueObjectFactory } from "common-domain";
import { Period } from "./entities/period";
import { Total } from "./value-objects/total";
export declare const accumulatorFactory: ValueObjectFactory<{
    id: typeof Id;
    userId: typeof Id;
    period: typeof Period;
    total: typeof Total;
}, "id" | "userId" | "period" | "total">;
//# sourceMappingURL=accumulator.factory.d.ts.map