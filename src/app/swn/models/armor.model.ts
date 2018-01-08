import { DataFileObject } from "./data-file-object.class";
import { Equipable } from "./equipable.interface";

export class Armor extends DataFileObject implements Equipable {
  readied: boolean = false;
  stowed: boolean = false;
  ac: number;
  acbonus: number;
  cost: number;
  encumbrance: number;
  tl: number;
  type: string;
}
