import { Component, OnInit, Input } from "@angular/core";
import { Skill } from "../../../models/index";
import { EditToggleBaseComponent } from "../../../../basic-components/edit-toggle-components/index";
import { SkillDataService } from "../../../data-files/index";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/merge";
import "rxjs/add/operator/concatMap";
import { NgbTypeaheadSelectItemEvent } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-skill",
  templateUrl: "./skill.component.html",
  styleUrls: ["./skill.component.css"]
})
export class SkillComponent extends EditToggleBaseComponent implements OnInit {
  @Input() skill: Skill;
  @Input() index: number;
  @Input() includePsychics: boolean;

  skillList: Skill[];

  constructor(private dataService: SkillDataService) {
    super();
  }

  ngOnInit() {}

  protected onSelectItem(eventItem: NgbTypeaheadSelectItemEvent) {
    this.dataService.getByName(eventItem.item).subscribe(
      data => {
        this.skill.applyRemoteData(data);
      },
      (error: Error) => {
        console.log(error.name);
        console.log(error.message);
      }
    );
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .switchMap(term =>
        this.dataService.getFilteredNames(term, this.includePsychics)
      );
}
