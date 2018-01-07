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
    this.character.xp = 39;
    this.character.name = "Johanna";
    this.character.background = "clergy";
    this.character.species = "human";
    this.character.class = CharacterClass.warrior;
    this.character.homeworld = "torbjorg";
    this.character.hp = { current: 54, max: 54 };
    this.character.systemstrain = { current: 14, max: 14 };

    this.character.stats = new Attributes();
    this.character.stats.str = new Attribute(14);
    this.character.stats.cha = new Attribute(15);
    this.character.stats.con = new Attribute(14);
    this.character.stats.dex = new Attribute(14);
    this.character.stats.int = new Attribute(12);
    this.character.stats.wis = new Attribute(14);

    this.character.finances = { credits: 0, items: new Array<any>() };

    this.character.cyberware = new Array<Cyberware>();

    let weapon: Weapon;
    this.character.weapons = new Array<Weapon>();
    weapon = new Weapon();
    weapon.name = "Johannas Monolance";
    weapon.damage = "1d8+3";
    weapon.type = "primitve";
    weapon.tl = 5;
    weapon.encumbrance = 1;
    weapon.attribute = "STR/DEX";
    weapon.shock = 2;
    weapon.shockac = 13;
    weapon.range = { effectiv: 10, max: 30 };
    this.character.weapons[0] = weapon;

    weapon = new Weapon();
    weapon.name = "Plasma Projector";
    weapon.damage = "2d8";
    weapon.type = "energy";
    weapon.tl = 4;
    weapon.encumbrance = 2;
    weapon.attribute = "DEX";
    weapon.range = { effectiv: 100, max: 300 };
    this.character.weapons[1] = weapon;

    let armor: Armor;
    this.character.armor = new Array<Armor>();
    armor = new Armor();
    armor.ac = 18;
    armor.acbonus = 1;
    armor.cost = 10000;
    armor.encumbrance = 2;
    armor.name = "Assault Suit";
    armor.tl = 4;
    armor.type = "powered";
    this.character.armor[0] = armor;

    armor = new Armor();
    armor.ac = 15;
    armor.acbonus = 1;
    armor.encumbrance = 1;
    armor.name = "Woven Body Armor";
    armor.tl = 3;
    this.character.armor[1] = armor;

    armor = new Armor();
    armor.ac = 0;
    armor.acbonus = 1;
    armor.encumbrance = 1;
    armor.name = "Shield";
    armor.tl = 4;
    this.character.armor[2] = armor;

    this.character.goals = new Array<Goal>();
    this.character.goals[0] = new Goal();
    this.character.goals[0].description = "Obtain Power Armor";
    this.character.goals[0].xp = 6;
    this.character.goals[0].details =
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.";

    this.character.notes = "some note";

    this.character.foci = new Array<Focus>();
    this.character.foci[0] = new Focus();
    this.character.foci[0].name = "Die Hard";
    this.character.foci[0].details =
      "You are surprisingly hard to kill. You can survive injuries or bear up under stresses that would incapacitate a less determined hero. Level 1: You gain an extra 2 maximum hit points per level. This bonus applies retroactively if you take this focus after first level. You automatically stabilize if mortally wounded by anything smaller than a Heavy weapon.";
    this.character.foci[0].level = 1;
    this.character.foci[1] = new Focus();
    this.character.foci[1].name = "Armsman";
    this.character.foci[1].details =
      "You have an unusual competence with thrown weapons and melee attacks. This focus’ benefits do not applyto unarmed attacks or projectile weapons. For thrownweapons, you can’t use the benefits of the Armsmanfocus at the same time as Gunslinger.Level 1: Gain Stab as a bonus skill. You can draw orsheath a Stowed melee or thrown weapon as anInstant action. You may add your Stab skill level toa melee or thrown weapon’s damage roll or Shockdamage, if any";
    this.character.foci[1].level = 1;
    this.character.foci[2] = new Focus();
    this.character.foci[2].name = "Wanderer";
    this.character.foci[2].details =
      "Your hero gets around. As part of a life on the road,they've mastered a number of tricks for ensuring theirmobility and surviving the inevitable difficulties of avagabond existence.Level 1: Gain Survive as a bonus skill. You can conveybasic ideas in all the common languages of thesector. You can always find free transport to a desired destination for yourself and a small group ofyour friends provided any traffic goes to the place.Finding this transport takes no more than an hour,but it may not be a strictly legitimate means oftravel and may require working passage.";
    this.character.foci[2].level = 1;
    this.character.foci[3] = new Focus();
    this.character.foci[3].name = "Unarmed Combatant";
    this.character.foci[3].details =
      "Your empty hands are more dangerous than knivesand guns in the grip of the less gifted. Your unarmedattacks are counted as melee weapons when it comes tobinding up opponents wielding rifles and similar longarms, though you need at least one hand free to do so.Level 1: Gain Punch as a bonus skill. Your unarmedattacks become more dangerous as your Punchskill increases. At level-0, they do 1d6 damage.At level-1, they do 1d8 damage. At level-2 theydo 1d10, level-3 does 1d12, and level-4 does 2d8.At Punch-1 or better, they have the Shock quality equal to 1 plus your Punch skill against AC 15or less. While you normally add your Punch skilllevel to any unarmed damage, don't add it twiceto this Shock damage.";
    this.character.foci[3].level = 1;

    this.character.skills = new Array<Skill>();
    this.character.skills[0] = new Skill();
    this.character.skills[0].name = "Exert";
    this.character.skills[0].details =
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.";
    this.character.skills[1] = new Skill();
    this.character.skills[1].name = "Lead";
    this.character.skills[1].details =
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.";
    this.character.skills[2] = new Skill();
    this.character.skills[2].name = "Notice";
    this.character.skills[2].details =
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.";
    this.character.skills[3] = new Skill();
    this.character.skills[3].name = "Punch";
    this.character.skills[3].details =
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.";
    this.character.skills[4] = new Skill();
    this.character.skills[4].name = "Stab";
    this.character.skills[4].details =
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.";
    this.character.skills[5] = new Skill();
    this.character.skills[5].name = "Talk";
    this.character.skills[5].details =
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.";
    this.character.skills[6] = new Skill();
    this.character.skills[6].name = "Survival";
    this.character.skills[6].details =
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.";
    this.character.skills[7] = new Skill();
    this.character.skills[7].name = "remaining";
    this.character.skills[7].details =
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.";
  }
}
