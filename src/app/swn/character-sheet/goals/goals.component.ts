import { Component, OnInit, Input } from "@angular/core";
import { Character, Goal } from "../../models/index";
import { EditToggleListBase } from "../../../basic-components/edit-toggle-components/index";

@Component({
  selector: "app-goals",
  templateUrl: "./goals.component.html",
  styleUrls: ["./goals.component.css"]
})
export class GoalsComponent extends EditToggleListBase implements OnInit {
  @Input() character: Character;

  constructor() {
    super();
  }

  ngOnInit() {}

  public onAdd(): void {
    this.character.goals.push(new Goal());
  }
  public onRemove(index: number): void {
    this.character.goals.splice(index, 1);
  }
}
