import { Component, OnInit, Input } from "@angular/core";
import { Character, Armor } from "../../models/index";
import { EditToggleListBase } from "../../../basic-components/edit-toggle-components/index";

@Component({
  selector: "app-armors",
  templateUrl: "./armors.component.html",
  styleUrls: ["./armors.component.css"]
})
export class ArmorsComponent extends EditToggleListBase implements OnInit {
  @Input() character: Character;

  constructor() {
    super();
  }

  ngOnInit() {}

  public onAdd(): void {
    this.character.armor.push(new Armor());
  }
  public onRemove(index: number): void {
    this.character.armor.slice(index, 1);
  }
}
