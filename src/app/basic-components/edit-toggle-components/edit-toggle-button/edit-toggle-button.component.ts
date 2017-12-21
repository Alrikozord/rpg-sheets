import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-edit-toggle-button",
  templateUrl: "./edit-toggle-button.component.html",
  styleUrls: ["./edit-toggle-button.component.css"]
})
export class EditToggleButtonComponent implements OnInit {
  @Input() editMode: boolean;

  constructor() {}

  ngOnInit() {}
}
