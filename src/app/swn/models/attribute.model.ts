export class Attribute {
  public value: number;

  constructor(value: number) {
    this.value = value;
  }

  public get modifier(): number {
    if (this.value < 4) {
      return -2;
    } else if (this.value < 8) {
      return -1;
    } else if (this.value < 14) {
      return 0;
    } else if (this.value < 18) {
      return 1;
    } else {
      return 2;
    }
  }
}
