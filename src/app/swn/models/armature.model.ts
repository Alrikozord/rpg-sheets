import { DataFileObject } from "./data-file-object.class";

export class Armature extends DataFileObject {
  type: string;
  details: string;
  attributes: {
    strength: number;
    dexterity: number;
    constitution: number;
  } = { strength: 0, dexterity: 0, constitution: 0 };
  basicAbilities: string;
  affinityAbilities: string;
}
