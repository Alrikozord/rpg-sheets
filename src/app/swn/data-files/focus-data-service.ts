import { DataServiceBase } from "./data-service-base";
import { HttpClient } from "@angular/common/http";
import { Focus } from "../models/index";
import { Injectable } from "@angular/core";

@Injectable()
export class FocusDataService extends DataServiceBase<Focus> {
  constructor(_http: HttpClient) {
    super("foci.json", _http);
  }

  protected parseJson(fileRepresentation: any): Focus {
    const instance = new Focus();
    instance.level = 0;
    instance.name = fileRepresentation.name;
    instance.type = fileRepresentation.type;
    instance.details = fileRepresentation.details.toString();
    return instance;
  }
}
