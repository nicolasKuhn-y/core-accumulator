"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccumulatorCreatedEvent = void 0;
const common_domain_1 = require("common-domain");
class AccumulatorCreatedEvent extends common_domain_1.DomainEvent {
    constructor(input) {
        super({
            id: input.id,
            type: "ltv.accumulators.1.command.accumulator.create",
            attributes: {}
        });
    }
}
exports.AccumulatorCreatedEvent = AccumulatorCreatedEvent;
