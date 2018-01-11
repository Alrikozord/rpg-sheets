import { DataFileObject } from "./data-file-object.class";

export class Armature extends DataFileObject {
  details: string;
  strength: number;
  dexterity: number;
  constitution: number;
  basicAbilities: string;
  affinityAbilities: string;
}
