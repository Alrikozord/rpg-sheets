import { Component, OnInit, Input } from '@angular/core';
import { Character } from "../../models/index";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input() character: Character;
  
  constructor() { }

  ngOnInit() {
  }

}
