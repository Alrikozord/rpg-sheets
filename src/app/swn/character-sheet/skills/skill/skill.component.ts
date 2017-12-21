import { Component, OnInit, Input } from "@angular/core";
import { Skill } from "../../../models/index";
import { EditToggleBaseComponent } from "../../../../basic-components/edit-toggle-components/index";

@Component({
  selector: "app-skill",
  templateUrl: "./skill.component.html",
  styleUrls: ["./skill.component.css"]
})
export class SkillComponent extends EditToggleBaseComponent implements OnInit {
  @Input() skill: Skill;
  @Input() index: number;

  constructor() {
    super();
  }

  ngOnInit() {}
}
