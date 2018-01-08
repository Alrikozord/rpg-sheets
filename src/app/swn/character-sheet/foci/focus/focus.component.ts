import { Component, OnInit, } from "@angular/core";
import { Focus } from "../../../models/index";
import { FocusDataService } from "../../../data-files/index";
import { TypeaheadBase } from "../../../../basic-components/edit-toggle-components/typeahead-base";

@Component({
  selector: "app-focus",
  templateUrl: "./focus.component.html",
  styleUrls: ["./focus.component.css"]
})
export class FocusComponent extends TypeaheadBase<Focus> implements OnInit {
  constructor(dataService: FocusDataService) {
    super(dataService);
  }

  ngOnInit() {}
}
