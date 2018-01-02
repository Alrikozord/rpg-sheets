import { DataServiceBase } from "./data-service-base";
import { HttpClient } from "@angular/common/http";
import { Weapon } from "../models/index";
import { Injectable } from "@angular/core";

@Injectable()
export class WeaponDataService extends DataServiceBase<Weapon> {
  constructor(_http: HttpClient) {
    super("weapons.json", _http);
  }
}
