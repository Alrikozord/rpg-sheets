import { Component, OnInit, ApplicationRef, isDevMode } from "@angular/core";
import {
  Character,
  Attribute,
  Attributes,
  Weapon,
  Armor,
  Skill,
  Goal,
  Focus,
  DynamicCharacterValueProvider,
  CharacterClass,
  Cyberware
} from "../models/index";
import { DropboxService } from "../../services/dropbox.service";
import { ActivatedRoute, Params } from "@angular/router";
import { PlatformLocation } from "@angular/common";
import { Observable } from "rxjs/Observable";
import { error } from "selenium-webdriver";
import { CookieService } from "ngx-cookie";
import { Subject } from "rxjs/Subject";
import { debounceTime } from "rxjs/operator/debounceTime";

@Component({
  selector: "app-character-sheet",
  templateUrl: "./character-sheet.component.html",
  styleUrls: ["./character-sheet.component.css"]
})
export class CharacterSheetComponent implements OnInit {
  private static readonly lastDropboxCharCookieKey = "lst_dbx_chr";
  public character: Character;
  private _dropBoxSaveSuccess = new Subject<string>();
  private _dropBoxSaveFailure = new Subject<string>();
  successMessage: string;
  failureMessage: string;
  charNames$: Observable<string[]>;

  constructor(
    private cookieService: CookieService,
    public dropbox: DropboxService
  ) {}

  get isDevMode() {
    // forewarding so it is available in the html
    return isDevMode();
  }

  ngOnInit() {
    this.initCharacter();
    this.updateCharNames();

    this.setupSaveSuccessMessage();
    this.setupSaveFailureMessage();
  }

  private updateCharNames() {
    this.charNames$ = this.getDropboxFileNames();
  }

  private setupSaveSuccessMessage() {
    this._dropBoxSaveSuccess.subscribe(
      message => (this.successMessage = message)
    );
    debounceTime
      .call(this._dropBoxSaveSuccess, 5000)
      .subscribe(() => (this.successMessage = null));
  }

  private setupSaveFailureMessage() {
    this._dropBoxSaveFailure.subscribe(
      message => (this.failureMessage = message)
    );
    debounceTime
      .call(this._dropBoxSaveFailure, 5000)
      .subscribe(() => (this.failureMessage = null));
  }

  onSaveToDisc() {
    const fileName = this.getFileName();
    const charJson = this.character.save();

    this.generateDownload(charJson, fileName);

    this.cookieService.remove(CharacterSheetComponent.lastDropboxCharCookieKey);
  }

  private getFileName() {
    const date = new Date(Date.now()).toISOString();
    return this.character.name + "_" + date + ".json";
  }

  private generateDownload(data, filename: string) {
    const blob = new Blob(["\ufeff" + data], {
      type: "application/json;charset=utf-8;"
    });
    const dwldLink = document.createElement("a");
    const url = URL.createObjectURL(blob);
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", filename);
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }

  onSaveToDropbox() {
    const fileName = this.getFileName();
    const charJson = this.character.save();

    this.dropbox.upload(charJson, fileName).subscribe(
      result => {
        this.updateCharNames();
        this.cookieService.put(
          CharacterSheetComponent.lastDropboxCharCookieKey,
          fileName
        );

        this._dropBoxSaveSuccess.next("save successful");
      },
      err => {
        this.dropbox.logError(err);
        this._dropBoxSaveFailure.next("save failed!");
      }
    );
  }

  onLoadFromDisk($event) {
    const reader = new FileReader();
    const file = $event.target.files[0];

    reader.onloadend = e => this.onloaded(e);
    reader.readAsText(file);
  }

  private onloaded(e: ProgressEvent) {
    const json = (<FileReader>e.target).result;
    const loadedChar = new Character();

    loadedChar.load(json);

    this.character = loadedChar;

    this.cookieService.remove(CharacterSheetComponent.lastDropboxCharCookieKey);
  }

  onLoadFromDropbox(fileName: string) {
    this.dropbox.download(fileName).subscribe(
      result => {
        const loadedChar = new Character();

        loadedChar.load(JSON.stringify(result));

        this.character = loadedChar;

        this.cookieService.put(
          CharacterSheetComponent.lastDropboxCharCookieKey,
          fileName
        );
      },
      err => this.dropbox.logError(err)
    );
  }

  getDropboxFileNames(): Observable<string[]> {
    return this.dropbox.listFolderContent().map(
      response =>
        (<any[]>response.entries)
          .sort((a: any, b: any) => {
            const dateA = Date.parse(a.server_modified);
            const dateB = Date.parse(b.server_modified);
            if (dateA < dateB) {
              return -1;
            } else if (dateA > dateB) {
              return 1;
            } else {
              return 0;
            }
          })
          .reverse()
          .map(entry => entry.name),
      err => this.dropbox.logError(err)
    );
  }

  private initCharacter() {
    const lastDropboxFileName = this.cookieService.get(
      CharacterSheetComponent.lastDropboxCharCookieKey
    );

    this.character = new Character();

    if (lastDropboxFileName !== undefined && this.dropbox.isAuthorized) {
      this.onLoadFromDropbox(lastDropboxFileName);
    }
  }
}
