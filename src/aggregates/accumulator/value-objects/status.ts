import { ValueObject } from 'common-domain'

export type StatusType = 'open' | 'close';

export class Status extends ValueObject<StatusType> {
  constructor (value: StatusType) {
    super(value)
    this.ensureValuesTypeIsValid()
  }

  private ensureValuesTypeIsValid () {
    if (this.innerValue !== 'close' && this.innerValue !== 'open') {
      throw new Error(`Status must be close or open. It cannot be => ${this.innerValue}`)
    }
  }

  public close () {
    this.innerValue = 'close'
  }
}
