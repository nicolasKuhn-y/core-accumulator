import { Id, ValueObjectFactory } from "common-domain";

import { Period } from "./entities/period";
import { Status } from "./value-objects/status";
import { Total } from "./value-objects/total";

export const accumulatorFactory = new ValueObjectFactory({
	id: Id,
	userId: Id,
	period: Period,
	status: Status,
	total: Total
});
