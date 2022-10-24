import { DomainEvent, Id } from "common-domain";
declare type EventInput = {
    id: Id;
};
export declare class AccumulatorCreatedEvent extends DomainEvent {
    constructor(input: EventInput);
}
export {};
//# sourceMappingURL=accumulator-created.d.ts.map