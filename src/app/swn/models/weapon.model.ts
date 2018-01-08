import { DataFileObject } from "./data-file-object.class";
import { Equipable } from "./equipable.interface";

export class Weapon extends DataFileObject implements Equipable {
  readied: boolean = false;
  stowed: boolean = false;
  type: string;
  damage: string;
  shock: number;
  shockac: number;
  attribute: string;
  cost: number;
  encumbrance: number;
  tl: number;
  details: string;
  range: { effectiv: number; max: number } = { effectiv: 0, max: 0 };
}
