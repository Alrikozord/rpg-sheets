import { DataServiceBase } from "./data-service-base";
import { HttpClient } from "@angular/common/http";
import { Weapon } from "../models/index";
import { Injectable } from "@angular/core";

@Injectable()
export class WeaponDataService extends DataServiceBase<Weapon> {
  constructor(_http: HttpClient) {
    super("weapons.json", _http);
  }

  protected parseJson(fileRepresentation: any): Weapon {
    const instance = new Weapon();
    instance.name = fileRepresentation.name;
    instance.type = fileRepresentation.type;
    instance.damage = fileRepresentation.damage;
    instance.range = {
      effectiv: fileRepresentation.range,
      max: fileRepresentation.maxrange
    };
    instance.cost = fileRepresentation.cost;
    instance.encumbrance = fileRepresentation.encumbrance;
    instance.attribute = fileRepresentation.attribute;
    instance.tl = fileRepresentation.tl;
    instance.details = fileRepresentation.details.toString();
    return instance;
  }
}
