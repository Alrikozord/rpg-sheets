import { Component, OnInit, Input , Output} from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {

  @Input() label: string;
  @Input() modifier: number;
  @Input()@Output() value: number;


  constructor() { }

  ngOnInit() {
  }

}
