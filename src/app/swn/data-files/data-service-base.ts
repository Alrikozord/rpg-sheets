import { Injectable } from "@angular/core";
// import { Http, HttpModule, Response } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import { ErrorHandler } from "@angular/core/src/error_handler";
import { Observable } from "rxjs/Observable";
import { DataFileObject } from "../models/data-file-object.class";
import { observableToBeFn } from "rxjs/testing/TestScheduler";

@Injectable()
export abstract class DataServiceBase<T extends DataFileObject> {
  private _file: string;

  constructor(fileName: string, private _http: HttpClient) {
    this._file = "/assets/swn/" + fileName;

    // this.getAll().subscribe(next => console.log(next));
  }

  getAll(): Observable<T[]> {
    return this._http
      .get(this._file)
      .map(result => (<T[]>result).map(item => this.parseJson(item)));
  }

  protected abstract parseJson(fileRepresentation: any): T;

  protected deepishCopy(freshInstance: T, fileRepresentation: any) {
    freshInstance.applyRemoteData(fileRepresentation);
  }

  getNames(): Observable<string[]> {
    return this.getAll().map(elements => elements.map(item => item.name));
  }

  getFilteredNames(term: string): Observable<string[]> {
    return this.getNames().map(item =>
      item.filter(v => {
        return v.toLowerCase().indexOf(term.toLowerCase()) > -1;
      })
    );
  }

  getByName(name: string): Observable<T> {
    return this.getAll().map(elements =>
      elements.find((item: T) => {
        return item.name === name;
      })
    );
  }
}
