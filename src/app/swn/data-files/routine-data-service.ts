import { DataServiceBase } from "./data-service-base";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Routine } from "../models/routine.model";

@Injectable()
export class RoutineDataService extends DataServiceBase<Routine> {
  constructor(_http: HttpClient) {
    super("routines.json", _http);
  }

  protected parseJson(fileRepresentation: any): Routine {
    const instance = new Routine();
    this.deepishCopy(instance, fileRepresentation);
    return instance;
  }
}
