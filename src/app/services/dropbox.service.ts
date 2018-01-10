import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { PlatformLocation } from "@angular/common";
import { DropboxAuthResponse } from "./dropbox-auth-response";
import { CookieService } from "ngx-cookie";
import { HttpErrorResponse } from "@angular/common/http/src/response";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DropboxService {
  private static readonly authTokenCookieKey = "dbx_tkn";
  private client_id = "lvs6n59sctp3vq1";
  private href: string;
  private _authToken: string;

  private get authToken(): string {
    return this._authToken;
  }
  private set authToken(value: string) {
    this._authToken = value;
    this.cookieService.put(DropboxService.authTokenCookieKey, this.authToken);
  }

  constructor(
    private cookieService: CookieService,
    private http: HttpClient,
    platformLocation: PlatformLocation
  ) {
    this.href = (platformLocation as any).location.origin;
    this.parseRedirectHash((platformLocation as any).location.hash);

    this.authToken = this.cookieService.get(DropboxService.authTokenCookieKey);
  }

  public parseRedirectHash(hash: string) {
    if (hash === "" || hash === undefined) {
      return;
    }
    const params = new DropboxAuthResponse(hash);
    this.authToken = params.getAccessToken();
  }

  public get isAuthorized(): boolean {
    return this.authToken !== "" && this.authToken !== undefined;
  }

  public authorize() {
    const parameters = new HttpParams()
      .set("response_type", "token")
      .set("client_id", this.client_id)
      .set("redirect_uri", this.href)
      .set("require_role", "personal");

    window.location.href =
      "https://www.dropbox.com/oauth2/authorize?" + parameters.toString();
  }

  public upload(json: string, name): Observable<any> {
    const paramsJson = JSON.stringify({
      path: "/swn/" + name,
      mode: "add",
      autorename: true,
      mute: true
    });

    return this.http.post(
      "https://content.dropboxapi.com/2/files/upload",
      json,
      {
        headers: new HttpHeaders()
          .set("Authorization", "Bearer " + this.authToken)
          .set("Dropbox-API-Arg", paramsJson)
          .set("Content-Type", "application/octet-stream")
      }
    );
  }

  public uploadIgnoreResponse(json: string, name): void {
    this.upload(json, name).subscribe(
      result => console.log(result),
      error => this.logError(error)
    );
  }

  public download(name: string): Observable<any> {
    const paramsJson = JSON.stringify({
      path: "/swn/" + name
    });

    return this.http.post(
      "https://content.dropboxapi.com/2/files/download",
      null,
      {
        headers: new HttpHeaders()
          .set("Authorization", "Bearer " + this.authToken)
          .set("Dropbox-API-Arg", paramsJson)
      }
    );
  }

  public listFolderContent(): Observable<any> {
    const paramsJson = JSON.stringify({
      path: "/swn",
      recursive: false,
      include_media_info: false,
      include_deleted: false,
      include_has_explicit_shared_members: false,
      include_mounted_folders: true
    });

    return this.http.post(
      "https://api.dropboxapi.com/2/files/list_folder",
      paramsJson,
      {
        headers: new HttpHeaders()
          .set("Authorization", "Bearer " + this.authToken)
          .set("Content-Type", "application/json")
      }
    );
  }

  public logError(error: HttpErrorResponse) {
    console.log(error.message);
    console.log(error.error);
  }
}
