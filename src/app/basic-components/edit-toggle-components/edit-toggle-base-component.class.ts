import { Output, Input } from "@angular/core";
import { GuidIdentifiable } from "./guid-identifiable.class";

export abstract class EditToggleBaseComponent extends GuidIdentifiable {
  protected _editMode: boolean;

  constructor() {
    super();
    this._editMode = false;
  }

  @Output()
  @Input()
  public get editMode(): boolean {
    return this._editMode;
  }
  public set editMode(value: boolean) {
    this._editMode = value;
  }

  public ToggleEditMode(): void {
    this._editMode = !this._editMode;
  }
}
