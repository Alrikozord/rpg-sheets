import { DataFileObject } from "./data-file-object.interface";

export class Armor implements DataFileObject {
  name: string;
  ac: number;
  acbonus: number;
  cost: number;
  encumbrance: number;
  tl: number;
  type: string;
}
