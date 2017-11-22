import { Component, OnInit, Input } from '@angular/core';
import { Character } from "../../models/index";

@Component({
  selector: 'app-foci',
  templateUrl: './foci.component.html',
  styleUrls: ['./foci.component.css']
})
export class FociComponent implements OnInit {

  @Input() character: Character;
  
  constructor() { }

  ngOnInit() {
  }

}
