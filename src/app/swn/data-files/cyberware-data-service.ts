import { DataServiceBase } from "./data-service-base";
import { HttpClient } from "@angular/common/http";
import { Cyberware } from "../models/index";
import { Injectable } from "@angular/core";

@Injectable()
export class CyberwareDataService extends DataServiceBase<Cyberware> {
  constructor(_http: HttpClient) {
    super("cyberware.json", _http);
  }
}
