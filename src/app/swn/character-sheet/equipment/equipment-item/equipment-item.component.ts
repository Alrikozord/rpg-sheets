import { Component, OnInit } from "@angular/core";
import { EquipmentItem } from "../../../models/index";
import { TypeaheadBase } from "../../../../basic-components/edit-toggle-components/typeahead-base";
import { EquipmentDataService } from "../../../data-files/equipment-data-service";

@Component({
  selector: "app-equipment-item",
  templateUrl: "./equipment-item.component.html",
  styleUrls: ["./equipment-item.component.css"]
})
export class EquipmentItemComponent extends TypeaheadBase<EquipmentItem>
  implements OnInit {
  constructor(dataService: EquipmentDataService) {
    super(dataService);
  }

  ngOnInit() {}
}
