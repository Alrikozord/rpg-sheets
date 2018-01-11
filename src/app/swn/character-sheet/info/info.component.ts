import { Component, OnInit, Input } from "@angular/core";
import { Character, CharacterClass } from "../../models/index";
import { EditToggleBaseComponent } from "../../../basic-components/edit-toggle-components/index";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.css"]
})
export class InfoComponent extends EditToggleBaseComponent implements OnInit {
  @Input() character: Character;

  characterClasses = CharacterClass;
  classKeys;

  public get className(): string {
    return this.prettyClassName(this.character.class);
  }

  constructor() {
    super();
    this.classKeys = Object.keys(this.characterClasses)
      .filter(Number)
      .sort((a, b) => {
        const aName = this.prettyClassName(+a);
        const bName = this.prettyClassName(+b);
        if (aName < bName) {
          return -1;
        } else if (aName > bName) {
          return 1;
        } else {
          return 0;
        }
      });
  }

  prettyClassName(characterClass: CharacterClass): string {
    switch (+characterClass) {
      case CharacterClass.expertPsychic:
        return "expert / psychic";
      case CharacterClass.warriorExpert:
        return "warrior / expert";
      case CharacterClass.warriorPsychic:
        return "warrior / psychic";
      case CharacterClass.trueAi:
        return "true ai";
      case CharacterClass.partialTrueAi:
        return "partial true ai";
      default:
        return CharacterClass[characterClass];
    }
  }

  ngOnInit() {}
}
