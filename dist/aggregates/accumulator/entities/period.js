"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Period = void 0;
const common_domain_1 = require("common-domain");
class Period extends common_domain_1.ValueObject {
    constructor(value) {
        super(value);
        this.validityDays = 30;
        this.calculatePeriodEnd();
    }
    calculatePeriodEnd() {
        if (this.innerValue.endDate !== undefined)
            return;
        const endDate = new Date(this.innerValue.startDate);
        const daysToIncrement = endDate.getDate() + this.validityDays;
        endDate.setDate(daysToIncrement);
        this.innerValue.endDate = endDate;
    }
}
exports.Period = Period;
