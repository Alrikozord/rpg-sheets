import { Character } from "./index";

export class DynamicCharacterValueProvider {
  private character: Character;

  constructor(character: Character) {
    this.character = character;
  }

  // ** SAVES **
  public get baseSave() {
    return 16 - this.getLevel();
  }

  public get physicalSave() {
    const strMod = this.character.stats.str.modifier;
    const conMod = this.character.stats.con.modifier;

    return this.baseSave - Math.max(strMod, conMod);
  }

  public get evasionSave() {
    const intMod = this.character.stats.int.modifier;
    const dexMod = this.character.stats.dex.modifier;

    return this.baseSave - Math.max(intMod, dexMod);
  }

  public get mentalSave() {
    const wisMod = this.character.stats.wis.modifier;
    const chaMod = this.character.stats.cha.modifier;

    return this.baseSave - Math.max(wisMod, chaMod);
  }

  // ** Level & XP **
  public getLevel(): number {
    return this.getLevelForXP(this.character.xp);
  }

  private getXPForLevel(level): number {
    if (level < 1) {
      return 0;
    }
    switch (level) {
      case 1:
        return 0;
      case 2:
        return 3;
      case 3:
        return 6;
      case 4:
        return 12;
      case 5:
        return 18;
      case 6:
        return 27;
      case 7:
        return 39;
      case 8:
        return 54;
      case 9:
        return 72;
      case 10:
        return 93;
      default:
        return 93 + (level - 10) * 24;
    }
  }

  private getLevelForXP(xp): number {
    let level = 1;
    while (this.getXPForLevel(level) <= xp) {
      ++level;
    }
    return level - 1;
  }

  // ** Attack Bonus **

  public get attackBonus(): number {
    let attackBonus: number;
    const level = this.getLevel();
    if (this.character.isFullWarrior) {
      attackBonus = level;
    } else {
      attackBonus = Math.floor(level / 2);
      if (this.character.isPartialWarrior) {
        ++attackBonus; // +1 at first level
        if (level >= 5) {
          ++attackBonus; // another +1 at 5th level
        }
      }
    }
    return attackBonus;
  }
}
