import { Id } from "common-domain";
import { Transaction } from "../transaction/transaction.aggregate";
import { Accumulator } from "./accumulator.aggregate";

import { CreateAccumulatorDto } from "./interfaces/create-accumulator";

const dto = {
	id: new Id().value,
	period: {
		startDate: new Date(),
		endDate: new Date()
	},
	userId: new Id().value,
	total: 0
};

const tran1 = Transaction.rebuild({ type: "QR", amount: 1200, userId: new Id().value, id: new Id().value });
const tran2 = Transaction.rebuild({ type: "servicePayment", amount: 13445, userId: new Id().value, id: new Id().value });
const tran3 = Transaction.rebuild({ type: "QR", amount: 5000, userId: new Id().value, id: new Id().value });
const tran4 = Transaction.rebuild({ type: "servicePayment", amount: 340, userId: new Id().value, id: new Id().value });
const tran5 = Transaction.rebuild({ type: "QR", amount: 360, userId: new Id().value, id: new Id().value });

const transactions = [tran1, tran2, tran3, tran4, tran5]

const accumulator = Accumulator.create(dto);

console.log(accumulator.getLastEvent().attributes);
