import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { PlatformLocation } from "@angular/common";
import { DropboxAuthResponse } from "./dropbox-auth-response";
import { CookieService } from "ngx-cookie";
import { HttpErrorResponse } from "@angular/common/http/src/response";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DropboxService {
  private authTokenCookieKey = "dbx_tkn";
  private client_id = "lvs6n59sctp3vq1";
  private href: string;
  private authToken: string;

  constructor(
    private _cookieService: CookieService,
    platformLocation: PlatformLocation,
    private http: HttpClient
  ) {
    this.href = (platformLocation as any).location.origin;
    this.authToken = this._cookieService.get(this.authTokenCookieKey);
  }

  public parseRedirectHash(hash: string) {
    if (hash === "") {
      return;
    }
    const params = new DropboxAuthResponse(hash);
    this.authToken = params.getAccessToken();
    this._cookieService.put(this.authTokenCookieKey, this.authToken);
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

  public upload(json: string, name) {
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

  public download(name: string): Observable<Object> {
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

  public listFolderContent(): Observable<Object> {
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
