import { DataFileObject } from "./data-file-object.class";

export class Routine extends DataFileObject {
  skill: string;
  level: number;
  type: string;
  details: string;
}
