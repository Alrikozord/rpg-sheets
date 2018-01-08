import { DataFileObject } from "./data-file-object.class";

export class EquipmentItem extends DataFileObject {
  cost: number;
  encumbrance: number;
  tl: number;
  details: string;
}
