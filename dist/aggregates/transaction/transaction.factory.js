"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionFactory = void 0;
const common_domain_1 = require("common-domain");
const amount_1 = require("./value-objects/amount");
const type_1 = require("./value-objects/type");
exports.transactionFactory = new common_domain_1.ValueObjectFactory({
    id: common_domain_1.Id,
    userId: common_domain_1.Id,
    type: type_1.Type,
    amount: amount_1.Amount
});
