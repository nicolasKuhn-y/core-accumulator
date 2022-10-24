import { ValueObject } from "common-domain";

export class Total extends ValueObject<number> {
	constructor(value: number) {
		super(value);
	}
}
