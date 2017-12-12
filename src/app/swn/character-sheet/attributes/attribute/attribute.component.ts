import { Component, OnInit, Input, Output } from "@angular/core";
import { Attribute } from "../../../models/attribute.model";
import { EditToggleBaseComponent } from "../../../../basic-components/edit-toggle-components/edit-toggle-base-component.class";

@Component({
  selector: "app-attribute",
  templateUrl: "./attribute.component.html",
  styleUrls: ["./attribute.component.css"]
})
export class AttributeComponent extends EditToggleBaseComponent
  implements OnInit {
  @Input() label: string;
  @Input() attribute: Attribute;

  constructor() {
    super();
  }

  ngOnInit() {}

  // weird workaround due to problems with bindung and getter/setters
  onInput(event: any) {
    this.attribute.value = parseInt(event.target.value, 0);
  }
}
