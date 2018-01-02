import { Injectable } from "@angular/core";
// import { Http, HttpModule, Response } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import { ErrorHandler } from "@angular/core/src/error_handler";
import { Observable } from "rxjs";
import { DataFileObject } from "../models/data-file-object.interface";
import { observableToBeFn } from "rxjs/testing/TestScheduler";

@Injectable()
export class DataServiceBase<T extends DataFileObject> {
  private _file: string;

  constructor(fileName: string, private _http: HttpClient) {
    this._file = "/assets/swn/" + fileName;
  }

  getAll(): Observable<T[]> {
    return this._http.get(this._file).map(result => <T[]>result);
  }

  getNames(): Observable<string[]> {
    return this.getAll().map(elements => elements.map(item => item.name));
  }

  getByName(name: string): Observable<T> {
    return this.getAll().map(elements => elements.find(item => item.name === name));
  }
}
