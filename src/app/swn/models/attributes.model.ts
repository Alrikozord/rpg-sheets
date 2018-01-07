import { Attribute } from "./attribute.model";

export class Attributes {
  cha: Attribute;
  con: Attribute;
  dex: Attribute;
  int: Attribute;
  str: Attribute;
  wis: Attribute;

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    this.cha = new Attribute(10);
    this.con = new Attribute(10);
    this.dex = new Attribute(10);
    this.int = new Attribute(10);
    this.str = new Attribute(10);
    this.wis = new Attribute(10);
  }
}
