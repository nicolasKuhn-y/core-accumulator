import { NumberValueObject } from "common-domain/dist";

import { Type } from "../../../value-objects/type";

export interface TransactionProps {
	type: Type;
	amount: NumberValueObject;
}
