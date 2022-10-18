import { TransactionType } from "../../../value-objects/type";

export interface CreateTransactionDto {
	type: TransactionType;
	amount?: number;
}
