import { DataFileObject } from "./data-file-object.class";

export class Skill extends DataFileObject {
  level: number;
  type: string;
  details: string;
}
