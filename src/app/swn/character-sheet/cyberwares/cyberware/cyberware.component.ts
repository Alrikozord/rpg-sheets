import { Component, OnInit } from "@angular/core";
import { Cyberware } from "../../../models/index";
import { CyberwareDataService } from "../../../data-files/index";
import { TypeaheadBase } from "../../../../basic-components/edit-toggle-components/typeahead-base";

@Component({
  selector: "app-cyberware",
  templateUrl: "./cyberware.component.html",
  styleUrls: ["./cyberware.component.css"]
})
export class CyberwareComponent extends TypeaheadBase<Cyberware>
  implements OnInit {

  constructor(dataService: CyberwareDataService) {
    super(dataService);
  }

  ngOnInit() {}
}
