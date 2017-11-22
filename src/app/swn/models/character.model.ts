// Direct import to prevent circular reference via index.ts
import { Attributes } from "./attributes.model";
import { Focus } from "./focus.model";
import { Skill } from "./skill.model";
import { Armor } from "./armor.model";
import { Weapon } from "./weapon.model";
import { Cyberware } from "./cyberware.model";
import { DynamicCharacterValueProvider } from "./dynamic-character-data";
import { Goal } from "./goal.model";

export class Character {
    public name: string;
    public class: string;
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
    public finances: {
        credits: number,
        items: any[]
    };
    public armor: Armor[];
    public weapons: Weapon[];
    public equipment: any[];
    public cyberware: Cyberware[];
    public goals: Goal[];
    public notes: string;

    public dynamics: DynamicCharacterValueProvider;

    constructor();
    constructor(jsonString: string)
    constructor(jsonString?: string) {
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
}