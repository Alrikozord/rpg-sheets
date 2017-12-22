import { Component, OnInit, Input } from "@angular/core";
import { Armor } from "../../../models/index";
import { FormsModule } from "@angular/forms";
import { EditToggleBaseComponent } from "../../../../basic-components/edit-toggle-components/index";

@Component({
  selector: "app-armor",
  templateUrl: "./armor.component.html",
  styleUrls: ["./armor.component.css"]
})
export class ArmorComponent extends EditToggleBaseComponent implements OnInit {
  @Input() armor: Armor;
  @Input() index: number;

  constructor() {
    super();
  }

  ngOnInit() {}
}
