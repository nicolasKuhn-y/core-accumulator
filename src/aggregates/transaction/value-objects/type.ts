import { ValueObject } from 'common-domain'

export type TransactionType = 'QR' | 'servicePayment';

export class Type extends ValueObject<TransactionType> {
  constructor (value: TransactionType) {
    super(value)
  }
}
