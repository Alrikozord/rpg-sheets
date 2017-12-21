import { Component, OnInit, Input } from "@angular/core";
import { Focus } from "../../../models/index";
import { EditToggleBaseComponent } from "../../../../basic-components/edit-toggle-components/index";

@Component({
  selector: "app-focus",
  templateUrl: "./focus.component.html",
  styleUrls: ["./focus.component.css"]
})
export class FocusComponent extends EditToggleBaseComponent implements OnInit {
  @Input() focus: Focus;
  @Input() index: number;

  constructor() {
    super();
  }

  ngOnInit() {}
}
