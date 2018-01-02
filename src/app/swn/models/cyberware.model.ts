import { DataFileObject } from "./data-file-object.interface";

export class Cyberware implements DataFileObject {
  name: string;
  cost: number;
  systemstrain: number;
  tl: number;
  details: string;
}
