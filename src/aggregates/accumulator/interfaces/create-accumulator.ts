import { CreateTransactionDto } from "../../transaction/interfaces/create-transaction";

export interface CreateAccumulatorDto {
	id?: string;
	operations: CreateTransactionDto[];
}
