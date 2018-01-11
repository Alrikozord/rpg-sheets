import { Component, OnInit } from "@angular/core";
import { Routine } from "../../../models/routine.model";
import { TypeaheadBase } from "../../../../basic-components/edit-toggle-components/typeahead-base";
import { TechniqueDataService } from "../../../data-files/technique-data-service";
import { RoutineDataService } from "../../../data-files/routine-data-service";

@Component({
  selector: "app-routine",
  templateUrl: "./routine.component.html",
  styleUrls: ["./routine.component.css"]
})
export class RoutineComponent extends TypeaheadBase<Routine> implements OnInit {
  constructor(dataService: RoutineDataService) {
    super(dataService);
  }

  ngOnInit() {}
}
