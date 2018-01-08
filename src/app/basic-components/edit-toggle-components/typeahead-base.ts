import { EditToggleBaseComponent } from "./edit-toggle-base-component.class";
import { Input, ViewChild } from "@angular/core";
import { DataFileObject } from "../../swn/models/data-file-object.class";
import { DataServiceBase } from "../../swn/data-files/index";
import { Observable } from "rxjs/Observable";
import { NgbTypeaheadSelectItemEvent } from "@ng-bootstrap/ng-bootstrap";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";

export abstract class TypeaheadBase<
  T extends DataFileObject
> extends EditToggleBaseComponent {
  @Input() item: T;
  @Input() index: number;

  constructor(private dataService: DataServiceBase<T>) {
    super();
  }

  onSelectItem(eventItem: NgbTypeaheadSelectItemEvent) {
    this.dataService.getByName(eventItem.item).subscribe(
      data => {
        this.item.applyRemoteData(data);
      },
      (error: Error) => {
        console.log(error.name);
        console.log(error.message);
      }
    );
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .switchMap(term => this.dataService.getFilteredNames(term));
}
