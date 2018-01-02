import { DataFileObject } from "./data-file-object.interface";

export class Skill implements DataFileObject {
  name: string;
  level: number;
  type: string;
  details: string;
}
