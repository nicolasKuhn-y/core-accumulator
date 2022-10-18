import { Id } from "common-domain/dist";

import { Accumulator } from "./accumulator.aggregate";

const accumulator = Accumulator.create({
	operations: [
		{ type: "QR", amount: 2500 },
		{ type: "PHONE_RECHARGE", amount: 1250 }
	]
});

const events = accumulator.pullEvents()

console.log(events);
