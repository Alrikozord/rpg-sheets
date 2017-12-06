// Direct import to prevent circular reference via index.ts
import { Attributes } from "./attributes.model";
import { Focus } from "./focus.model";
import { Skill } from "./skill.model";
import { Armor } from "./armor.model";
import { Weapon } from "./weapon.model";
import { Cyberware } from "./cyberware.model";
import { DynamicCharacterValueProvider } from "./dynamic-character-data";
import { Goal } from "./goal.model";
import { SerializableProperties } from "./index";

export class Character {
    private serializables: SerializableProperties;

    public dynamics: DynamicCharacterValueProvider;

    constructor();
    constructor(jsonString: string)
    constructor(jsonString?: string) {
        this.serializables = new SerializableProperties();
        if (jsonString) {
            let jsonObj: any = JSON.parse(jsonString);
            for (let prop in jsonObj) {
                this[prop] = jsonObj[prop];
            }
        }

        this.dynamics = new DynamicCharacterValueProvider(this);
    }


    public isPsychic(): boolean {
        return this.class.toLowerCase().indexOf("psychic") !== -1;
    }

    public isFullPsychic(): boolean {
        return this.class.toLowerCase() == "psychic";
    }

    public isPartialPsychic(): boolean {
        return this.isPsychic() && !this.isFullPsychic();
    }

    public isWarrior(): boolean {
        return this.class.toLowerCase().indexOf("warrior") !== -1;
    }

    public isFullWarrior(): boolean {
        return this.class.toLowerCase() == "warrior";
    }

    public isPartialWarrior(): boolean {
        return this.isWarrior() && !this.isFullWarrior();
    }

    public isExpert(): boolean {
        return this.class.toLowerCase().indexOf("expert") !== -1;
    }

    public isFullExpert(): boolean {
        return this.class.toLowerCase() == "expert";
    }

    public isPartialExpert(): boolean {
        return this.isExpert() && !this.isFullExpert();
    }


    // SerializableProperties proxy
    public get name(): string {
        return this.serializables.name;
    }
    public set name(value: string) {
        this.serializables.name = value;
    }

    public get class(): string {
        return this.serializables.class;
    }
    public set class(value: string) {
        this.serializables.class = value;
    }

    public get species(): string {
        return this.serializables.species;
    }
    public set species(value: string) {
        this.serializables.species = value;
    }

    public get background(): string {
        return this.serializables.background;
    }
    public set background(value: string) {
        this.serializables.background = value;
    }

    public get homeworld(): string {
        return this.serializables.homeworld;
    }
    public set homeworld(value: string) {
        this.serializables.homeworld = value;
    }

    public get xp(): number {
        return this.serializables.xp;
    }
    public set xp(value: number) {
        this.serializables.xp = value;
    }

    public get stats(): Attributes {
        return this.serializables.stats;
    }
    public set stats(value: Attributes) {
        this.serializables.stats = value;
    }

    public get hp(): { current: number, max: number } {
        return this.serializables.hp;
    }
    public set hp(value: { current: number, max: number }) {
        this.serializables.hp = value;
    }

    public get systemstrain(): { current: number, max: number } {
        return this.serializables.systemstrain;
    }
    public set systemstrain(value: { current: number, max: number }) {
        this.serializables.systemstrain = value;
    }

    public get effort(): { scene: number, day: number, other: number } {
        return this.serializables.effort;
    }
    public set effort(value: { scene: number, day: number, other: number }) {
        this.serializables.effort = value;
    }

    public get foci(): Focus[] {
        return this.serializables.foci;
    }
    public set foci(value: Focus[]) {
        this.serializables.foci = value;
    }

    public get skills(): Skill[] {
        return this.serializables.skills;
    }
    public set skills(value: Skill[]) {
        this.serializables.skills = value;
    }

    public get techniques(): any[] {
        return this.serializables.techniques;
    }
    public set techniques(value: any[]) {
        this.serializables.techniques = value;
    }

    public get finances(): { credits: number, items: any[] } {
        return this.serializables.finances;
    }
    public set finances(value: { credits: number, items: any[] }) {
        this.serializables.finances = value;
    }

    public get armor(): Armor[] {
        return this.serializables.armor;
    }
    public set armor(value: Armor[]) {
        this.serializables.armor = value;
    }

    public get weapons(): Weapon[] {
        return this.serializables.weapons;
    }
    public set weapons(value: Weapon[]) {
        this.serializables.weapons = value;
    }

    public get equipment(): any[] {
        return this.serializables.equipment;
    }
    public set equipment(value: any[]) {
        this.serializables.equipment = value;
    }

    public get cyberware(): Cyberware[] {
        return this.serializables.cyberware;
    }
    public set cyberware(value: Cyberware[]) {
        this.serializables.cyberware = value;
    }

    public get goals(): Goal[] {
        return this.serializables.goals;
    }
    public set goals(value: Goal[]) {
        this.serializables.goals = value;
    }

    public get notes(): string {
        return this.serializables.notes;
    }
    public set notes(value: string) {
        this.serializables.notes = value;
    }
}