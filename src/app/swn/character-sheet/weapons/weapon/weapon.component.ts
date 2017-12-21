import { Component, OnInit, Input } from "@angular/core";
import { Weapon } from "../../../models/index";

@Component({
  selector: "app-weapon",
  templateUrl: "./weapon.component.html",
  styleUrls: ["./weapon.component.css"]
})
export class WeaponComponent implements OnInit {
  @Input() weapon: Weapon;
  @Input() index: number;

  constructor() {}

  ngOnInit() {}
}
