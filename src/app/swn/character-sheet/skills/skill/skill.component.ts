import { Component, OnInit, Input } from '@angular/core';
import { Skill } from "../../../models/index";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() skill:Skill;
  @Input() index:number;

  constructor() { }

  ngOnInit() {
  }

}
