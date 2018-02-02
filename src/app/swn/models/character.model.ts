// Direct import to prevent circular reference via index.ts
import { Attributes } from "./attributes.model";
import { Focus } from "./focus.model";
import { Skill } from "./skill.model";
import { Armor } from "./armor.model";
import { Weapon } from "./weapon.model";
import { Cyberware } from "./cyberware.model";
import { DynamicCharacterValueProvider } from "./dynamic-character-data";
import { Goal } from "./goal.model";
import { SerializableProperties } from "./serializable-properties.class";
import { CharacterClass } from "./character-class.enum";
import { CharacterBase } from "../../basic-components/models/character-base.class";
import { EquipmentItem } from "./equipment-item.model";
import { Armature } from "./armature.model";
import { DropboxService } from "../../services/dropbox.service";
import { Routine } from "./routine.model";
import { Technique } from "./index";

export class Character extends CharacterBase {
  public serializables: SerializableProperties;

  public derived: DynamicCharacterValueProvider;

  constructor(jsonString?: string) {
    super();

    this.serializables = new SerializableProperties();
    if (jsonString) {
      const jsonObj: any = JSON.parse(jsonString);
      // tslint:disable-next-line:forin
      for (const prop in jsonObj) {
        this[prop] = jsonObj[prop];
      }
    }

    this.derived = new DynamicCharacterValueProvider(this);
  }

  public load(json: string) {
    const parsedObject = JSON.parse(json);
    // necessary to actualy get an SerializableProperties from the parsed object.
    // otherweise it would be an undefined Object.
    Object.assign(this.serializables, parsedObject);
    this.serializables.doDeserializationCleanup();
  }

  public save() {
    return JSON.stringify(this.serializables);
  }

  public get isPsychic(): boolean {
    return (
      this.class === CharacterClass.psychic ||
      this.class === CharacterClass.expertPsychic ||
      this.class === CharacterClass.warriorPsychic
    );
  }
  public get isFullPsychic(): boolean {
    return this.class === CharacterClass.psychic;
  }
  public isPartialPsychic(): boolean {
    return this.isPsychic && !this.isFullPsychic;
  }

  public get isWarrior(): boolean {
    return (
      this.class === CharacterClass.warrior ||
      this.class === CharacterClass.warriorExpert ||
      this.class === CharacterClass.warriorPsychic
    );
  }
  public get isFullWarrior(): boolean {
    return this.class === CharacterClass.warrior;
  }
  public get isPartialWarrior(): boolean {
    return this.isWarrior && !this.isFullWarrior;
  }

  public get isExpert(): boolean {
    return (
      this.class === CharacterClass.expert ||
      this.class === CharacterClass.expertPsychic ||
      this.class === CharacterClass.warriorExpert
    );
  }
  public get isFullExpert(): boolean {
    return this.class === CharacterClass.expert;
  }
  public get isPartialExpert(): boolean {
    return this.isExpert && !this.isFullExpert;
  }

  public get isAi(): boolean {
    return (
      this.class === CharacterClass.trueAi ||
      this.class === CharacterClass.partialTrueAi
    );
  }

  // SerializableProperties proxy
  public get name(): string {
    return this.serializables.name;
  }
  public set name(value: string) {
    this.serializables.name = value;
  }

  public get class(): CharacterClass {
    return this.serializables.class;
  }
  public set class(value: CharacterClass) {
    // weird conversion is necessary to ensure the value is stored as an actual number, not a string
    // representation of that number. If the string gets stored, comparison against enum values will not work
    this.serializables.class = Number.parseInt(value.toString());
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

  public get hp(): { current: number; max: number } {
    return this.serializables.hp;
  }
  public set hp(value: { current: number; max: number }) {
    this.serializables.hp = value;
  }

  public get systemstrain(): { current: number; max: number } {
    return this.serializables.systemstrain;
  }
  public set systemstrain(value: { current: number; max: number }) {
    this.serializables.systemstrain = value;
  }

  public get effort(): {
    scene: number;
    day: number;
    other: number;
    max: number;
  } {
    return this.serializables.effort;
  }
  public set effort(value: {
    scene: number;
    day: number;
    other: number;
    max: number;
  }) {
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

  public get remainingSkillPoints(): number {
    return this.serializables.remainingSkillPoints;
  }
  public set remainingSkillPoints(value: number) {
    this.serializables.remainingSkillPoints = value;
  }

  public get techniques(): Technique[] {
    return this.serializables.techniques;
  }
  public set techniques(value: Technique[]) {
    this.serializables.techniques = value;
  }

  public get routines(): Routine[] {
    return this.serializables.routines;
  }
  public set routines(value: Routine[]) {
    this.serializables.routines = value;
  }

  public get finances(): { credits: number; items: any[] } {
    return this.serializables.finances;
  }
  public set finances(value: { credits: number; items: any[] }) {
    this.serializables.finances = value;
  }

  public get armature(): Armature {
    return this.serializables.armature;
  }
  public set armature(value: Armature) {
    this.serializables.armature = value;
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

  public get equipment(): EquipmentItem[] {
    return this.serializables.equipment;
  }
  public set equipment(value: EquipmentItem[]) {
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
