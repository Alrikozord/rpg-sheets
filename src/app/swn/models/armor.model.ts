import { DataFileObject } from "./data-file-object.class";

export class Armor extends DataFileObject {
  ac: number;
  acbonus: number;
  cost: number;
  encumbrance: number;
  tl: number;
  type: string;
}
