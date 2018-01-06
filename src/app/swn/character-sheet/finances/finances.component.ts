import { Component, OnInit, Input } from "@angular/core";
import { Character } from "../../models/index";

@Component({
  selector: "app-finances",
  templateUrl: "./finances.component.html",
  styleUrls: ["./finances.component.css"]
})
export class FinancesComponent implements OnInit {
  @Input() character: Character;

  constructor() {}

  ngOnInit() {}
}
