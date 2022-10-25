import { TransactionType } from '../value-objects/type'

export interface CreateTransactionDto {
    id?: string;
    userId: string;
    type: TransactionType;
    amount: number;
}
