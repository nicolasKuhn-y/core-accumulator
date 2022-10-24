import { ValueObject } from "common-domain";
declare type PeriodData = {
    startDate: Date;
    endDate?: Date;
};
export declare class Period extends ValueObject<PeriodData> {
    private readonly validityDays;
    constructor(value: PeriodData);
    private calculatePeriodEnd;
}
export {};
//# sourceMappingURL=period.d.ts.map