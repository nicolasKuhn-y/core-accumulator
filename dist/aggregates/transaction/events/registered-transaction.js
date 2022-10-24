"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordedTransactionEvent = void 0;
const common_domain_1 = require("common-domain");
class RecordedTransactionEvent extends common_domain_1.DomainEvent {
    constructor(props) {
        super({
            type: "ltv.transactions.1.command.transaction.record",
            id: props.id,
            attributes: {}
        });
    }
}
exports.RecordedTransactionEvent = RecordedTransactionEvent;
