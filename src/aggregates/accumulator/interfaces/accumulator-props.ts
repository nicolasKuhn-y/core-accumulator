import { Id } from "common-domain";

import { Period } from "../entities/period";
import { Status } from "../value-objects/status";
import { Total } from "../value-objects/total";

export interface AccumulatorProps {
	id: Id;
	userId: Id;
	period: Period;
	total: Total;
	status: Status
}
