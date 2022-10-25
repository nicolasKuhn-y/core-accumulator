import { StatusType } from '../value-objects/status'

export interface CreateAccumulatorDto {
    id?: string;
    userId: string;
    total: number;
    status?: StatusType;
    period: {
        startDate: Date;
        endDate?: Date;
    };
}
