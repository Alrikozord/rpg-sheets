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

@Component({
  selector: "app-character-sheet",
  templateUrl: "./character-sheet.component.html",
  styleUrls: ["./character-sheet.component.css"]
})
export class CharacterSheetComponent implements OnInit {
  public character: Character;
  charNames$: Observable<string[]>;

  constructor(
    platformLocation: PlatformLocation,
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

    this.dropbox
      .upload(charJson, fileName)
      .subscribe(
        result => this.updateCharNames(),
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
  }

  onLoadFromDropbox(fileName: string) {
    this.dropbox.download(fileName).subscribe(
      result => {
        const loadedChar = new Character();

        loadedChar.load(JSON.stringify(result));

        this.character = loadedChar;
      },
      error => this.dropbox.logError(error)
    );
  }

  getDropboxFileNames(): Observable<string[]> {
    return this.dropbox
      .listFolderContent()
      .map(
        response => response.entries.map(entry => entry.name),
        error => this.dropbox.logError(error)
      );
  }

  private initCharacter() {
    this.character = new Character();
  }
}
