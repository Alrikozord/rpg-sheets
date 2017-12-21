import { Component, OnInit, Input, Output } from "@angular/core";
import { Goal } from "../../../models/index";
import { EditToggleBaseComponent } from "../../../../basic-components/edit-toggle-components/index";

@Component({
  selector: "app-goal",
  templateUrl: "./goal.component.html",
  styleUrls: ["./goal.component.css"]
})
export class GoalComponent extends EditToggleBaseComponent implements OnInit {
  @Input() index: number;

  @Input() goal: Goal;

  constructor() {
    super();
  }

  ngOnInit() {}
}
