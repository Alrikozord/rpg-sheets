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
    const strMod = this.getModifier(this.character.stats.str);
    const conMod = this.getModifier(this.character.stats.con);

    return this.baseSave - Math.max(strMod, conMod);
  }

  public get evasionSave() {
    const intMod = this.getModifier(this.character.stats.int);
    const dexMod = this.getModifier(this.character.stats.dex);

    return this.baseSave - Math.max(intMod, dexMod);
  }

  public get mentalSave() {
    const wisMod = this.getModifier(this.character.stats.wis);
    const chaMod = this.getModifier(this.character.stats.cha);

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

  // ** Attribute Mods **
  public get chaModifier() {
    return this.getModifier(this.character.stats.cha);
  }

  public get conModifier() {
    return this.getModifier(this.character.stats.con);
  }

  public get dexModifier() {
    return this.getModifier(this.character.stats.dex);
  }

  public get intModifier() {
    return this.getModifier(this.character.stats.int);
  }

  public get strModifier() {
    return this.getModifier(this.character.stats.str);
  }

  public get wisModifier() {
    return this.getModifier(this.character.stats.wis);
  }

  private getModifier(attribute: number) {
    if (attribute < 4) {
      return -2;
    } else if (attribute < 8) {
      return -1;
    } else if (attribute < 14) {
      return 0;
    } else if (attribute < 18) {
      return 1;
    } else {
      return 2;
    }
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
