import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-list-add-button",
  templateUrl: "./list-add-button.component.html",
  styleUrls: ["./list-add-button.component.css"]
})
export class ListAddButtonComponent implements OnInit {
  @Input() editMode: boolean;

  constructor() {}

  ngOnInit() {}
}
