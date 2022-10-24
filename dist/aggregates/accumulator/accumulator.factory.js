"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accumulatorFactory = void 0;
const common_domain_1 = require("common-domain");
const period_1 = require("./entities/period");
const total_1 = require("./value-objects/total");
exports.accumulatorFactory = new common_domain_1.ValueObjectFactory({
    id: common_domain_1.Id,
    userId: common_domain_1.Id,
    period: period_1.Period,
    total: total_1.Total
});
