import { Component, OnInit } from "@angular/core";
import { Armor } from "../../../models/index";
import { FormsModule } from "@angular/forms";
import { ArmorDataService } from "../../../data-files/index";
import { TypeaheadBase } from "../../../../basic-components/edit-toggle-components/typeahead-base";

@Component({
  selector: "app-armor",
  templateUrl: "./armor.component.html",
  styleUrls: ["./armor.component.css"]
})
export class ArmorComponent extends TypeaheadBase<Armor> implements OnInit {

  constructor(dataService: ArmorDataService) {
    super(dataService);
  }

  ngOnInit() {}
}
