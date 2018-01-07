import { Component, OnInit, Input } from "@angular/core";
import { Focus } from "../../../models/index";
import { EditToggleBaseComponent } from "../../../../basic-components/edit-toggle-components/index";
import { FocusDataService } from "../../../data-files/index";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";
import { NgbTypeaheadSelectItemEvent } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-focus",
  templateUrl: "./focus.component.html",
  styleUrls: ["./focus.component.css"]
})
export class FocusComponent extends EditToggleBaseComponent implements OnInit {
  @Input() focus: Focus;
  @Input() index: number;

  constructor(private dataService: FocusDataService) {
    super();
  }

  ngOnInit() {}

  protected onSelectItem(eventItem: NgbTypeaheadSelectItemEvent) {
    this.dataService.getByName(eventItem.item).subscribe(
      data => {
        this.focus.applyRemoteData(data);
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
      .switchMap(term => this.dataService.getFilteredNames(term));
}
