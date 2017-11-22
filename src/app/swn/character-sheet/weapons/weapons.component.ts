import { Component, OnInit, Input } from '@angular/core';
import { Character, Weapon } from "../../models/index";

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.css']
})
export class WeaponsComponent implements OnInit {

  @Input() character: Character;

  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    this.character.weapons.push(new Weapon);   
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
