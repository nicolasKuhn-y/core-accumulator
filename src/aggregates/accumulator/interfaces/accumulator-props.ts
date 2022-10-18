import { Id } from "common-domain";

import { Transaction } from "../../transaction/transaction.aggregate";

export interface AccumulatorProps {
	id: Id;
	transactions: Transaction[];
}
