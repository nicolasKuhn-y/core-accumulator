"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Total = void 0;
const common_domain_1 = require("common-domain");
class Total extends common_domain_1.ValueObject {
    constructor(value) {
        super(value !== null && value !== void 0 ? value : 0);
    }
}
exports.Total = Total;
