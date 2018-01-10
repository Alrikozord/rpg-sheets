import { Component, OnInit, Input } from "@angular/core";
import { Character, Skill } from "../../models/index";
import { EditToggleListBase } from "../../../basic-components/edit-toggle-components/index";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"]
})
export class SkillsComponent extends EditToggleListBase implements OnInit {
  @Input() character: Character;

  constructor() {
    super();
  }

  ngOnInit() {}

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  public onAdd(): void {
    this.character.skills.push(new Skill());
  }
  public onRemove(index: number): void {
    this.character.skills.splice(index, 1);
  }

  ToggleEditMode(){
    super.ToggleEditMode();
    this.character.skills.sort(this.customSkillSort);
  }

  protected customSkillSort(a: Skill, b: Skill): number {
    if (a.type !== b.type) {
      if (a.type === "normal" && b.type === "psychic") {
        return -1;
      } else {
        return 1;
      }
    } else {
      return a.name.localeCompare(b.name);
    }
  }
}
