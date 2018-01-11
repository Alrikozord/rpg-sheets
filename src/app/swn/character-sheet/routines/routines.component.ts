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
    this.character.techniques.push(new Routine());
  }
  public onRemove(index: number): void {
    this.character.techniques.splice(index, 1);
  }
}
