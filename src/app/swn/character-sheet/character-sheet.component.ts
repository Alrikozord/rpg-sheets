import {
  Component,
  OnInit,
  ApplicationRef,
  NgZone,
  ChangeDetectorRef,
  isDevMode
} from "@angular/core";
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

@Component({
  selector: "app-character-sheet",
  templateUrl: "./character-sheet.component.html",
  styleUrls: ["./character-sheet.component.css"]
})
export class CharacterSheetComponent implements OnInit {
  public character: Character;

  constructor(private cd: ChangeDetectorRef) {}

  protected get isDevMode() {
    return isDevMode();
  }

  ngOnInit() {
    this.initCharacter();
  }

  onSave() {
    this.character.save();
  }

  onLoad($event) {
    const loadedChar = new Character();
    loadedChar.load($event.target.files[0]);
    this.character = loadedChar;
  }

  private initCharacter() {
    this.character = new Character();
  }
}
