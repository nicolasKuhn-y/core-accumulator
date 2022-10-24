"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const common_domain_1 = require("common-domain");
// Events
const registered_transaction_1 = require("./events/registered-transaction");
// Value objects & Entities
const transaction_factory_1 = require("./transaction.factory");
class Transaction extends common_domain_1.AggregateRoot {
    constructor(props) {
        super();
        this.id = props.id;
        this.amount = props.amount;
        this.type = props.type;
        this.userId = props.userId;
    }
    static record(dto) {
        const props = transaction_factory_1.transactionFactory.mapToCreate(Object.assign(Object.assign({}, dto), { id: dto.id }), { acceptEmptyValues: true });
        const isRecentlyCreated = dto.id === undefined;
        const transactionRegistered = new Transaction(props);
        if (isRecentlyCreated) {
            const transactionRecordedEvent = new registered_transaction_1.RecordedTransactionEvent({ id: transactionRegistered.id });
            transactionRegistered.saveEvent(transactionRecordedEvent);
        }
        return transactionRegistered;
    }
}
exports.Transaction = Transaction;
