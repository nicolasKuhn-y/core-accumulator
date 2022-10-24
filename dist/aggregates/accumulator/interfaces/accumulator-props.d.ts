import { Id } from "common-domain";
import { Period } from "../entities/period";
import { Total } from "../value-objects/total";
export interface AccumulatorProps {
    id: Id;
    userId: Id;
    period: Period;
    total: Total;
}
//# sourceMappingURL=accumulator-props.d.ts.map