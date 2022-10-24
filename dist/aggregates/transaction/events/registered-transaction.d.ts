import { DomainEvent, Id } from "common-domain";
declare type EventInput = {
    id: Id;
};
export declare class RecordedTransactionEvent extends DomainEvent {
    constructor(props: EventInput);
}
export {};
//# sourceMappingURL=registered-transaction.d.ts.map