import { Component, OnInit, Input } from "@angular/core";
import { EditToggleBaseComponent } from "../../../basic-components/edit-toggle-components/index";
import { Character, Armature } from "../../models/index";
import { ArmatureDataService } from "../../data-files/armature-data-service";
import { Observable } from "rxjs/Observable";
import { NgbTypeaheadSelectItemEvent } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-armature",
  templateUrl: "./armature.component.html",
  styleUrls: ["./armature.component.css"]
})
export class ArmatureComponent extends EditToggleBaseComponent
  implements OnInit {
  @Input() character: Character;
  constructor(private dataService: ArmatureDataService) {
    super();
  }

  ngOnInit() {}

  onSelectItem(eventItem: NgbTypeaheadSelectItemEvent) {
    this.dataService.getByName(eventItem.item).subscribe(
      data => {
        this.character.armature = new Armature();
        this.character.armature.applyRemoteData(data);
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
