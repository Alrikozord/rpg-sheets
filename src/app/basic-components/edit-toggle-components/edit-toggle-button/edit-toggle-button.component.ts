import { Component, OnInit, Input, Output } from "@angular/core";
import { EditToggleBaseComponent } from "../edit-toggle-base-component.class";

@Component({
  selector: "app-edit-toggle-button",
  templateUrl: "./edit-toggle-button.component.html",
  styleUrls: ["./edit-toggle-button.component.css"]
})
export class EditToggleButtonComponent implements OnInit {
  @Input()
  @Output()
  editMode: boolean;

  constructor() {}

  ngOnInit() {}
}
