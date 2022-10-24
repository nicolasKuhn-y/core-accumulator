"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccumulatorRules = void 0;
class AccumulatorRules {
    constructor() { }
    static create() { }
    // TODO: Revisar implementacion
    apply(transactions) {
        return transactions;
    }
}
exports.AccumulatorRules = AccumulatorRules;
/*

transacciones a exeptuar => Transaction

type => multiplicacion | suma | resta

transactionType => "QR" | "service payment"

value => 3 | 1
*/
