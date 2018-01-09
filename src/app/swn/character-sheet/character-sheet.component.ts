import { Component, OnInit, ApplicationRef, isDevMode } from "@angular/core";
import {
  Character,
  Attribute,
  Attributes,
  Weapon,
  Armor,
  Skill,
  Goal,
  Focus,
  DynamicCharacterValueProvider,
  CharacterClass,
  Cyberware
} from "../models/index";
import { DropboxService } from "../../services/dropbox.service";
import { ActivatedRoute, Params } from "@angular/router";
import { PlatformLocation } from "@angular/common";

@Component({
  selector: "app-character-sheet",
  templateUrl: "./character-sheet.component.html",
  styleUrls: ["./character-sheet.component.css"]
})
export class CharacterSheetComponent implements OnInit {
  public character: Character;

  constructor(
    platformLocation: PlatformLocation,
    private dropbox: DropboxService
  ) {
    dropbox.parseRedirectHash((platformLocation as any).location.hash);
  }

  get isDevMode() {
    // forewarding so it is available in the html
    return isDevMode();
  }

  ngOnInit() {
    this.initCharacter();
  }

  onSave() {
    this.character.save();
  }

  onLoad($event) {
    const loadedChar = new Character(this.dropbox);
    loadedChar.load($event.target.files[0]);
    this.character = loadedChar;
  }

  private initCharacter() {
    this.character = new Character(this.dropbox);
  }
}
