import { ValueObject } from 'common-domain'

export class Amount extends ValueObject<number> {
  constructor (value: number) {
    super(value)
  }
}
