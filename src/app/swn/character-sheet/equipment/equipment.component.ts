import { Component, OnInit, Input } from "@angular/core";
import { Character, EquipmentItem } from "../../models/index";
import { EditToggleBaseComponent, EditToggleListBase } from "../../../basic-components/edit-toggle-components/index";

@Component({
  selector: "app-equipment",
  templateUrl: "./equipment.component.html",
  styleUrls: ["./equipment.component.css"]
})
export class EquipmentComponent extends EditToggleListBase implements OnInit {

  @Input() character: Character;

  constructor() {
    super();
  }

  ngOnInit() {}

  public onAdd(): void {
    this.character.equipment.push(new EquipmentItem());
  }
  public onRemove(index: number): void {
    this.character.equipment.splice(index, 1);
  }
}
