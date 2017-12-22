import { Component, OnInit, Input } from "@angular/core";
import { Character, Weapon } from "../../models/index";
import { EditToggleListBase } from "../../../basic-components/edit-toggle-components/index";

@Component({
  selector: "app-weapons",
  templateUrl: "./weapons.component.html",
  styleUrls: ["./weapons.component.css"]
})
export class WeaponsComponent extends EditToggleListBase implements OnInit {
  @Input() character: Character;

  constructor() {
    super();
  }

  ngOnInit() {}

  public onAdd() {
    this.character.weapons.push(new Weapon());
  }
  public onRemove(index: number): void {
    this.character.weapons.splice(index, 1);
  }
}
