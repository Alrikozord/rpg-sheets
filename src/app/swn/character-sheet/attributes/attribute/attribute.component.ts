import { Component, OnInit, Input, Output } from "@angular/core";
import { Attribute } from "../../../models/attribute.model";

@Component({
  selector: "app-attribute",
  templateUrl: "./attribute.component.html",
  styleUrls: ["./attribute.component.css"]
})
export class AttributeComponent implements OnInit {
  @Input() label: string;
  @Input() attribute: Attribute;

  constructor() {}

  ngOnInit() {}

  // weird workaround due to problems with bindung and getter/setters
  onInput(event: any) {
    this.attribute.value = parseInt(event.target.value, 0);
  }
}
