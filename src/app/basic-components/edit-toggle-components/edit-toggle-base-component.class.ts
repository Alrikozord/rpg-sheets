import { Output, Input } from "@angular/core";

export abstract class EditToggleBaseComponent {
  protected _editMode: boolean;

  constructor(){
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
