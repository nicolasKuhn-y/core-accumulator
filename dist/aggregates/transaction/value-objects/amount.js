"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Amount = void 0;
const common_domain_1 = require("common-domain");
class Amount extends common_domain_1.ValueObject {
    constructor(value) {
        super(value);
    }
}
exports.Amount = Amount;
