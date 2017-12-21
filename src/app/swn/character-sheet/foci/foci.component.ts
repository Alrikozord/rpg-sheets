import { Component, OnInit, Input } from "@angular/core";
import { Character, Focus } from "../../models/index";
import { EditToggleBaseComponent, EditToggleListBase } from "../../../basic-components/edit-toggle-components/index";

@Component({
  selector: "app-foci",
  templateUrl: "./foci.component.html",
  styleUrls: ["./foci.component.css"]
})
export class FociComponent extends EditToggleListBase implements OnInit {
  @Input() character: Character;

  constructor() {
    super();
  }

  ngOnInit() {}

  public onAdd(): void {
    this.character.foci.push(new Focus());
  }
  public onRemove(index: number): void {
    this.character.foci.splice(index, 1);
  }
}
