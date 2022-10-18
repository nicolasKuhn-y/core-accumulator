import { ValueObject } from "common-domain/dist";

export type TransactionType = "QR" | "SERVICE_PAYMENT" | "PHONE_RECHARGE";

export class Type extends ValueObject<TransactionType> {
	constructor(value: TransactionType) {
		super(value);
	}
}
