import { Component, OnInit, Input } from "@angular/core";
import { Weapon } from "../../../models/index";
import { EditToggleBaseComponent } from "../../../../basic-components/edit-toggle-components/index";

@Component({
  selector: "app-weapon",
  templateUrl: "./weapon.component.html",
  styleUrls: ["./weapon.component.css"]
})
export class WeaponComponent extends EditToggleBaseComponent implements OnInit {
  @Input() weapon: Weapon;
  @Input() index: number;

  constructor() {
    super();
  }

  ngOnInit() {}
}
