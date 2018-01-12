import { Component, OnInit, Input } from "@angular/core";
import { Character, Routine } from "../../models/index";
import { EditToggleListBase } from "../../../basic-components/edit-toggle-components/index";

@Component({
  selector: "app-routines",
  templateUrl: "./routines.component.html",
  styleUrls: ["./routines.component.css"]
})
export class RoutinesComponent extends EditToggleListBase implements OnInit {
  @Input() character: Character;

  constructor() {
    super();
  }

  ngOnInit() {}

  public onAdd(): void {
    this.character.routines.push(new Routine());
  }
  public onRemove(index: number): void {
    this.character.routines.splice(index, 1);
  }

  ToggleEditMode(){
    super.ToggleEditMode();
    this.character.skills.sort(this.customSkillSort);
  }

  protected customSkillSort(a: Routine, b: Routine): number {
    if (a.type !== b.type) {
      if (a.type === "normal" && b.type === "peripheral") {
        return -1;
      } else {
        return 1;
      }
    } else {
      return a.name.localeCompare(b.name);
    }
  }
}
