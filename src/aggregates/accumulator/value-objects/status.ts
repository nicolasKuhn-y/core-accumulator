import { ValueObject } from "common-domain";

export type StatusType = "open" | "close";

export class Status extends ValueObject<StatusType> {
	constructor(value: StatusType) {
		super(value);
	}

	public close() {
		this.innerValue = "close";
	}
}
