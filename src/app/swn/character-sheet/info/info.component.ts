import { Component, OnInit, Input, Output } from "@angular/core";
import { Character, CharacterClass } from "../../models/index";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.css"]
})
export class InfoComponent implements OnInit {
  private _character: Character;

  public get character(): Character {
    return this._character;
  }

  @Input()
  public set character(value: Character) {
    this._character = value;
    this.className = CharacterClass[this.character.class];
  }

  @Output() className: string;

  constructor() {}

  ngOnInit() {}
}
