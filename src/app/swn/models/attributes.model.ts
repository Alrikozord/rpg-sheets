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

  doDeserializationCleanup(): void {
    // weired hack to convert the anonymous Objects from the
    // deserialization to actual Attributes.
    // see https://stackoverflow.com/questions/40421100/how-to-parse-a-json-object-to-a-typescript-object
    this.cha = this.doAttributeCleanUp(this.cha);
    this.con = this.doAttributeCleanUp(this.con);
    this.dex = this.doAttributeCleanUp(this.dex);
    this.int = this.doAttributeCleanUp(this.int);
    this.str = this.doAttributeCleanUp(this.str);
    this.wis = this.doAttributeCleanUp(this.wis);
  }

  private doAttributeCleanUp(attribute: Attribute): Attribute {
    const clean = new Attribute();
    Object.assign(clean, attribute);
    return clean;
  }
}
