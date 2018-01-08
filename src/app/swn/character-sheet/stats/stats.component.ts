import { Component, OnInit, Input } from "@angular/core";
import { Character } from "../../models/index";
import { EditToggleBaseComponent } from "../../../basic-components/edit-toggle-components/index";

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.css"]
})
export class StatsComponent extends EditToggleBaseComponent implements OnInit {
  @Input() character: Character;

  constructor() {
    super();
  }

  protected get isEffortLimitReached(): boolean {
    return (
      this.character.effort.day +
        this.character.effort.scene +
        this.character.effort.other >=
      this.character.effort.max
    );
  }

  ngOnInit() {}
}
