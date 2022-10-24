import { Id } from "common-domain";
import { Accumulator } from "../aggregates/accumulator/accumulator.aggregate";
export interface AccumulatorRepository {
    save(accumulatorAggregate: Accumulator): Accumulator;
    findById(id: Id): Accumulator;
    findByUserId(userId: Id): Accumulator;
    delete(id: Id): Accumulator;
}
//# sourceMappingURL=accumulator-repository.d.ts.map