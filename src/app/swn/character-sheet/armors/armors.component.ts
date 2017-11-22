import { Component, OnInit, Input } from '@angular/core';
import { Character } from "../../models/index";

@Component({
  selector: 'app-armors',
  templateUrl: './armors.component.html',
  styleUrls: ['./armors.component.css']
})
export class ArmorsComponent implements OnInit {

  @Input() character: Character;
  
  constructor() { }

  ngOnInit() {
  }

}
