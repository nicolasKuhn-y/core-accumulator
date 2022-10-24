import { AggregateRoot } from "common-domain";
import { AccumulatorProps } from "./interfaces/accumulator-props";
import { CreateAccumulatorDto } from "./interfaces/create-accumulator";
import { Transaction } from "../transaction/transaction.aggregate";
export declare class Accumulator extends AggregateRoot {
    private readonly id;
    private readonly userId;
    private readonly total;
    private readonly period;
    constructor(props: AccumulatorProps);
    static create(dto: CreateAccumulatorDto): Accumulator;
    static buildFromPrimitives(dto: CreateAccumulatorDto): Accumulator;
    close(): void;
    calculateTotal(transactions: Transaction[]): void;
}
//# sourceMappingURL=accumulator.aggregate.d.ts.map