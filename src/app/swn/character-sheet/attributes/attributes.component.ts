import { Component, OnInit, Input, Output } from "@angular/core";
import { Character } from "../../models/index";
import { EditToggleBaseComponent } from "../../../basic-components/edit-toggle-components/edit-toggle-base-component.class";

@Component({
  selector: "app-attributes",
  templateUrl: "./attributes.component.html",
  styleUrls: ["./attributes.component.css"]
})
export class AttributesComponent extends EditToggleBaseComponent
  implements OnInit {
  @Input()
  @Output()
  character: Character;

  constructor() {
    super();
  }

  ngOnInit() {}

  onToggle() {
    this.ToggleEditMode();
  }
}
