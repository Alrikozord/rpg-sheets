import { Component, OnInit, } from "@angular/core";
import { Technique } from "../../../models/index";
import { TypeaheadBase } from "../../../../basic-components/edit-toggle-components/typeahead-base";
import { TechniqueDataService } from "../../../data-files/technique-data-service";

@Component({
  selector: "app-technique",
  templateUrl: "./technique.component.html",
  styleUrls: ["./technique.component.css"]
})
export class TechniqueComponent extends TypeaheadBase<Technique> implements OnInit {
  constructor(dataService: TechniqueDataService) {
    super(dataService);
  }

  ngOnInit() {}
}
