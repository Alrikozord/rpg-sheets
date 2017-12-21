import { EditToggleBaseComponent } from "./edit-toggle-base-component.class";

export abstract class EditToggleListBase extends EditToggleBaseComponent {
  public abstract onAdd(): void;
  public abstract onRemove(index: number): void;
}
