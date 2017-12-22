export class Weapon {
  name: string;
  type: string;
  damage: string;
  shock: number;
  shockac: number;
  attribute: string;
  cost: number;
  encumbrance: number;
  tl: number;
  details: string;
  range: { effectiv: number; max: number } = { effectiv: 0, max: 0 };
}
