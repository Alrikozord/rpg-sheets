import { DataServiceBase } from "./data-service-base";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Technique } from "../models/technique.model";

@Injectable()
export class TechniqueDataService extends DataServiceBase<Technique> {
  constructor(_http: HttpClient) {
    super("techniques.json", _http);
  }

  protected parseJson(fileRepresentation: any): Technique {
    const instance = new Technique();
    this.deepishCopy(instance, fileRepresentation);
    return instance;
  }
}
