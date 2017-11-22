import { Component, OnInit, Input } from '@angular/core';
import { Armor } from '../../../models/index';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-armor',
  templateUrl: './armor.component.html',
  styleUrls: ['./armor.component.css']
})
export class ArmorComponent implements OnInit {

  @Input() armor: Armor;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
