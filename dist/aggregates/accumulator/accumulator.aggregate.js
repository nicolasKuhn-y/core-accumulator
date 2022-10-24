"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accumulator = void 0;
const common_domain_1 = require("common-domain");
// Events
const accumulator_created_1 = require("./events/accumulator-created");
// Value objects & Entities
const accumulator_factory_1 = require("./accumulator.factory");
class Accumulator extends common_domain_1.AggregateRoot {
    constructor(props) {
        super();
        this.id = props.id;
        this.userId = props.userId;
        this.total = props.total;
        this.period = props.period;
    }
    static create(dto) {
        const props = accumulator_factory_1.accumulatorFactory.mapToCreate(dto, { acceptEmptyValues: true });
        const accumulatorCreated = new Accumulator(props);
        const createdAccumulatorEvent = new accumulator_created_1.AccumulatorCreatedEvent({ id: accumulatorCreated.id });
        accumulatorCreated.saveEvent(createdAccumulatorEvent);
        return accumulatorCreated;
    }
    static buildFromPrimitives(dto) {
        const props = accumulator_factory_1.accumulatorFactory.mapToCreate(dto, { acceptEmptyValues: true });
        return new Accumulator(props);
    }
    // TODO: Logica de cierra/reseteo del acumulador
    close() { }
    // TODO: Logica del calculo
    calculateTotal(transactions) {
        // const transactions = this.rules.apply(transactions);
        // return transactions.reduce();
    }
}
exports.Accumulator = Accumulator;
