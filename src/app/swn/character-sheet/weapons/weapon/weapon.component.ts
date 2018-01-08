import { Component, OnInit, Input } from "@angular/core";
import { Weapon } from "../../../models/index";
import { TypeaheadBase } from "../../../../basic-components/edit-toggle-components/typeahead-base";
import { WeaponDataService } from "../../../data-files/index";

@Component({
  selector: "app-weapon",
  templateUrl: "./weapon.component.html",
  styleUrls: ["./weapon.component.css"]
})
export class WeaponComponent extends TypeaheadBase<Weapon> implements OnInit {

  constructor(dataService: WeaponDataService) {
    super(dataService);
  }

  ngOnInit() {}
}
