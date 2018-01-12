import { DataServiceBase } from "./data-service-base";
import { HttpClient } from "@angular/common/http";
import { Skill } from "../models/index";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

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

  getFilteredNames(
    term: string,
    includePsychics: boolean = true
  ): Observable<string[]> {
    return this.getNames(includePsychics).map(item =>
      item.filter(v => {
        return v.toLowerCase().indexOf(term.toLowerCase()) > -1;
      })
    );
  }

  getNames(includePsychics: boolean = true): Observable<string[]> {
    if (includePsychics) {
      return super.getNames();
    } else {
      return this.getAll().map(elements =>
        elements
          .filter(skill => skill.type !== "psychic")
          .map(item => item.name)
      );
    }
  }
}
