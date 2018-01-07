import { DataServiceBase } from "./data-service-base";
import { HttpClient } from "@angular/common/http";
import { Armor } from "../models/index";
import { Injectable } from "@angular/core";

@Injectable()
export class ArmorDataService extends DataServiceBase<Armor> {
  constructor(_http: HttpClient) {
    super("armors.json", _http);
  }

  protected parseJson(fileRepresentation: any): Armor {
    const instance = new Armor();
    this.deepishCopy(instance, fileRepresentation);
    return instance;
  }
}
