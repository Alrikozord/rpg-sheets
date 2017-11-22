import { Component, OnInit, Input } from '@angular/core';
import { Character } from "../../models/index";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  @Input() character: Character;
  
  constructor() { }

  ngOnInit() {
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

}
