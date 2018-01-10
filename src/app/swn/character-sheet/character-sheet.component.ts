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

@Component({
  selector: "app-character-sheet",
  templateUrl: "./character-sheet.component.html",
  styleUrls: ["./character-sheet.component.css"]
})
export class CharacterSheetComponent implements OnInit {
  private static readonly lastDropboxCharCookieKey = "lst_dbx_chr";
  public character: Character;
  charNames$: Observable<string[]>;

  constructor(
    private cookieService: CookieService,
    protected dropbox: DropboxService
  ) {}

  get isDevMode() {
    // forewarding so it is available in the html
    return isDevMode();
  }

  ngOnInit() {
    this.initCharacter();
    this.updateCharNames();
  }

  private updateCharNames() {
    this.charNames$ = this.getDropboxFileNames();
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
      },
      err => this.dropbox.logError(err)
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
    return this.dropbox
      .listFolderContent()
      .map(
        response => response.entries.map(entry => entry.name),
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
