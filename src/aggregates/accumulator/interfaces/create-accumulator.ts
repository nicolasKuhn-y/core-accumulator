export interface CreateAccumulatorDto {
	id?: string;
	userId: string;
	total?: number;
	period: {
		startDate: Date;
		endDate?: Date;
	};
}
