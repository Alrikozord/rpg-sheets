import { Component, OnInit, Input } from '@angular/core';
import { Character } from "../../models/index";

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent implements OnInit {

  @Input() character: Character;

  constructor() { }

  ngOnInit() {
  }
}
