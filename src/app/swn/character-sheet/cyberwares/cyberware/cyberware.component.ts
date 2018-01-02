import { Component, OnInit, Input } from "@angular/core";
import { Cyberware } from "../../../models/index";
import { EditToggleBaseComponent } from "../../../../basic-components/edit-toggle-components/index";

@Component({
  selector: "app-cyberware",
  templateUrl: "./cyberware.component.html",
  styleUrls: ["./cyberware.component.css"]
})
export class CyberwareComponent extends EditToggleBaseComponent implements OnInit {
  @Input() cyberware: Cyberware;
  @Input() index: number;

  constructor() {
    super();
  }

  ngOnInit() {}
}
