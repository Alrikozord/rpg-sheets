import { DataServiceBase } from "./data-service-base";
import { HttpClient } from "@angular/common/http";
import { Focus, EquipmentItem } from "../models/index";
import { Injectable } from "@angular/core";

@Injectable()
export class EquipmentDataService extends DataServiceBase<EquipmentItem> {
  constructor(_http: HttpClient) {
    super("equipment.json", _http);
  }

  protected parseJson(fileRepresentation: any): EquipmentItem {
    const instance = new EquipmentItem();
    this.deepishCopy(instance, fileRepresentation);
    return instance;
  }
}
