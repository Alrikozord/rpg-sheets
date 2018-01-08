import { Attributes } from "./attributes.model";
import { Focus } from "./focus.model";
import { Skill } from "./skill.model";
import { Armor } from "./armor.model";
import { Weapon } from "./weapon.model";
import { Cyberware } from "./cyberware.model";
import { Goal } from "./goal.model";
import { CharacterClass } from "./character-class.enum";
import { EquipmentItem } from "./equipment-item.model";
import { Technique } from "./technique.model";

export class SerializableProperties {
  public name: string;
  public class: number;
  public species: string;
  public background: string;
  public homeworld: string;
  public xp: number;
  public stats: Attributes = new Attributes();
  public hp: { current: number; max: number };
  public systemstrain: { current: number; max: number };
  public effort: { scene: number; day: number; other: number; max: number };
  public foci: Focus[];
  public skills: Skill[];
  public techniques: Technique[];
  public finances: { credits: number; items: any[] };
  public armor: Armor[];
  public weapons: Weapon[];
  public equipment: EquipmentItem[];
  public cyberware: Cyberware[];
  public goals: Goal[];
  public notes: string;

  constructor() {
    this.initialize();
  }

  initialize(): void {
    this.name = "character name";
    this.class = CharacterClass.warrior;
    this.species = "human";
    this.background = "background";
    this.homeworld = "homeworld";
    this.xp = 0;
    this.stats = new Attributes();
    this.hp = { current: 0, max: 0 };
    this.systemstrain = { current: 0, max: 0 };
    this.effort = { scene: 0, day: 0, other: 0, max: 0 };
    this.foci = new Array<Focus>();
    this.skills = new Array<Skill>();
    this.techniques = new Array<Technique>();
    this.finances = { credits: 0, items: new Array<any>() };
    this.armor = new Array<Armor>();
    this.weapons = new Array<Weapon>();
    this.equipment = new Array<EquipmentItem>();
    this.cyberware = new Array<Cyberware>();
    this.goals = new Array<Goal>();
  }
}
