import { Component, OnInit, Input } from "@angular/core";
import { Character } from "../../models/index";
import { GuidIdentifiable } from "../../../basic-components/edit-toggle-components/guid-identifiable.class";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"]
})
export class NotesComponent extends GuidIdentifiable implements OnInit {
  @Input() character: Character;

  constructor() {
    super();
  }

  ngOnInit() {}
}
