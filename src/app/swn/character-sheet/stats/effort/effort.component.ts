import { Component, OnInit, Input } from "@angular/core";
import { EditToggleBaseComponent } from "../../../../basic-components/edit-toggle-components/index";
import { Character } from "../../../models/index";

@Component({
  selector: "app-effort",
  templateUrl: "./effort.component.html",
  styleUrls: ["./effort.component.css"]
})
export class EffortComponent extends EditToggleBaseComponent implements OnInit {
  @Input() character: Character;

  get headline(): string {
    if (this.character.isAi) {
      return "Processing Power";
    } else {
      return "Effort";
    }
  }

  constructor() {
    super();
  }

  ngOnInit() {}

  protected get isEffortLimitReached(): boolean {
    return (
      this.character.effort.day +
        this.character.effort.scene +
        this.character.effort.other >=
      this.character.effort.max
    );
  }
}
