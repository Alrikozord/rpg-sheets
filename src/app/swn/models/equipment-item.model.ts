import { DataFileObject } from "./data-file-object.class";
import { Equipable } from "./equipable.interface";

export class EquipmentItem extends DataFileObject implements Equipable {
  readied: boolean = false;
  stowed: boolean = false;
  cost: number;
  encumbrance: number;
  tl: number;
  details: string;
}
