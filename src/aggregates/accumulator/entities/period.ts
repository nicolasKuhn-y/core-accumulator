import { ValueObject } from "common-domain";

type PeriodData = {
	startDate: Date;
	endDate?: Date;
};

export class Period extends ValueObject<PeriodData> {
	private readonly validityDays = 30;

	constructor(value: PeriodData) {
		super(value);
		this.calculatePeriodEnd();
	}

	private calculatePeriodEnd(): void {
		if (this.innerValue.endDate !== undefined) return;

		const endDate = new Date(this.innerValue.startDate);
		const daysToIncrement = endDate.getDate() + this.validityDays

		endDate.setDate(daysToIncrement);

		this.innerValue.endDate = endDate;
	}
}
