export abstract class CharacterBase {
  constructor() {}

  public abstract save(): string;
  public abstract load(json: string);
}
