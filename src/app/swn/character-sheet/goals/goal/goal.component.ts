import { Component, OnInit, Input, Output } from "@angular/core";
import { Goal } from "../../../models/index";

@Component({
  selector: "app-goal",
  templateUrl: "./goal.component.html",
  styleUrls: ["./goal.component.css"]
})
export class GoalComponent implements OnInit {
  @Input()
  index: number;

  @Input()
  goal: Goal;

  constructor() {}

  ngOnInit() {}
}
