import { DataServiceBase } from "./data-service-base";
import { HttpClient } from "@angular/common/http";
import { Skill } from "../models/index";
import { Injectable } from "@angular/core";

@Injectable()
export class SkillDataService extends DataServiceBase<Skill> {
  constructor(_http: HttpClient) {
    super("skills.json", _http);
  }

  protected parseJson(fileRepresentation: any): Skill {
    const instance = new Skill();
    instance.level = 0;
    instance.name = fileRepresentation.name;
    instance.type = fileRepresentation.type;
    instance.details = fileRepresentation.details.toString();
    return instance;
  }
}
