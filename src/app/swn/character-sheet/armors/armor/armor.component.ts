import { Component, OnInit, Input } from "@angular/core";
import { Armor } from "../../../models/index";
import { FormsModule } from "@angular/forms";
import { EditToggleBaseComponent } from "../../../../basic-components/edit-toggle-components/index";
import { NgbTypeaheadSelectItemEvent } from "@ng-bootstrap/ng-bootstrap";
import { ArmorDataService } from "../../../data-files/index";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";

@Component({
  selector: "app-armor",
  templateUrl: "./armor.component.html",
  styleUrls: ["./armor.component.css"]
})
export class ArmorComponent extends EditToggleBaseComponent implements OnInit {
  @Input() armor: Armor;
  @Input() index: number;

  constructor(private dataService: ArmorDataService) {
    super();
  }

  ngOnInit() {}

  protected onSelectItem(eventItem: NgbTypeaheadSelectItemEvent) {
    this.dataService.getByName(eventItem.item).subscribe(
      data => {
        this.armor.applyRemoteData(data);
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
