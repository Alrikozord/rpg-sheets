import { DataServiceBase } from "./data-service-base";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Armature } from "../models/armature.model";

@Injectable()
export class ArmatureDataService extends DataServiceBase<Armature> {
  constructor(_http: HttpClient) {
    super("armatures.json", _http);
  }

  protected parseJson(fileRepresentation: any): Armature {
    const instance = new Armature();
    this.deepishCopy(instance, fileRepresentation);
    return instance;
  }
}
