import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-list-remove-button",
  templateUrl: "./list-remove-button.component.html",
  styleUrls: ["./list-remove-button.component.css"]
})
export class ListRemoveButtonComponent implements OnInit {
  @Input() editMode: boolean;
  @Input() index: number;

  constructor() {}

  ngOnInit() {}
}
