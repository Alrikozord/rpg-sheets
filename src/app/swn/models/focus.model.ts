import { DataFileObject } from "./data-file-object.interface";

export class Focus implements DataFileObject {
  name: string;
  type: string;
  level: number;
  details: string;
}
