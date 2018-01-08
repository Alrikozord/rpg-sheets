import { Component, OnInit, Input } from "@angular/core";
import { Character, Technique } from "../../models/index";
import { EditToggleBaseComponent, EditToggleListBase } from "../../../basic-components/edit-toggle-components/index";

@Component({
  selector: "app-techniques",
  templateUrl: "./techniques.component.html",
  styleUrls: ["./techniques.component.css"]
})
export class TechniquesComponent extends EditToggleListBase implements OnInit {
  @Input() character: Character;

  constructor() {
    super();
  }

  ngOnInit() {}

  public onAdd(): void {
    this.character.techniques.push(new Technique());
  }
  public onRemove(index: number): void {
    this.character.techniques.splice(index, 1);
  }
}
