import { Component, OnInit, Input, Output } from '@angular/core';
import { Character } from "../../models/index";

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent implements OnInit {

  @Input()
  @Output() character: Character;

  constructor() { }

  ngOnInit() {
  }
}
