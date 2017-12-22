import { Component, OnInit, Input, Output } from "@angular/core";
import { Character, CharacterClass } from "../../models/index";
import { EditToggleBaseComponent } from "../../../basic-components/edit-toggle-components/index";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.css"]
})
export class InfoComponent extends EditToggleBaseComponent implements OnInit {
  @Input() character: Character;

  @Output()
  public get className(): string {
    return CharacterClass[this.character.class];
  }

  constructor() {
    super();
  }

  ngOnInit() {}
}
