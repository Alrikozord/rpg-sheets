import { Component, OnInit, Input } from "@angular/core";
import { Character, Cyberware } from "../../models/index";
import { EditToggleListBase } from "../../../basic-components/edit-toggle-components/index";

@Component({
  selector: "app-cyberwares",
  templateUrl: "./cyberwares.component.html",
  styleUrls: ["./cyberwares.component.css"]
})
export class CyberwaresComponent extends EditToggleListBase implements OnInit {
  @Input() character: Character;

  constructor() {
    super();
  }

  ngOnInit() {}

  public onAdd(): void {
    this.character.cyberware.push(new Cyberware());
  }
  public onRemove(index: number): void {
    this.character.cyberware.slice(index, 1);
  }
}
