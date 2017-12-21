import { Component, OnInit, Output, Input } from "@angular/core";

@Component({
  selector: "app-edit-toggle-list",
  templateUrl: "./edit-toggle-list.component.html",
  styleUrls: ["./edit-toggle-list.component.css"]
})
export class EditToggleListComponent<T> implements OnInit {
  @Input() title: string;

  @Input()
  @Output()
  listToEdit: T[];

  constructor() {}

  ngOnInit() {}
}
