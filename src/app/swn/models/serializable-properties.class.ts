import { Attributes, Focus, Skill, Armor, Weapon, Cyberware, Goal, CharacterClass } from "./index";

export class SerializableProperties {
    public name: string;
    public class: CharacterClass;
    public species: string;
    public background: string;
    public homeworld: string;
    public xp: number;
    public stats: Attributes;
    public hp: { current: number, max: number };
    public systemstrain: { current: number, max: number };
    public effort: { scene: number, day: number, other: number };
    public foci: Focus[];
    public skills: Skill[];
    public techniques: any[];
    public finances: { credits: number, items: any[] };
    public armor: Armor[];
    public weapons: Weapon[];
    public equipment: any[];
    public cyberware: Cyberware[];
    public goals: Goal[];
    public notes: string;
}
