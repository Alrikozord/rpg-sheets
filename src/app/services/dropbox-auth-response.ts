export class DropboxAuthResponse {
  private params: Array<{ key: string; value: string }>;

  constructor(hash: string) {
    this.params = this.parseHash(hash);
  }

  private parseHash(hash: string): Array<{ key: string; value: string }> {
    const params = new Array<{ key: string; value: string }>();
    let key: string;
    let value: string;
    let lastAmp = 0;
    let nextAmp = 0;
    let nextEquals = 0;

    do {
      nextAmp = hash.indexOf("&", lastAmp + 1);
      nextEquals = hash.indexOf("=", lastAmp);

      key = hash.substring(lastAmp + 1, nextEquals);

      if (nextAmp > -1) {
        value = hash.substring(nextEquals + 1, nextAmp);
      } else {
        value = hash.substring(nextEquals + 1, hash.length);
      }

      params.push({ key, value });

      lastAmp = nextAmp;
    } while (nextAmp > -1);

    return params;
  }

  public get hasError(): boolean {
    return this.getValueByKey("error") !== null;
  }

  private getValueByKey(key: string): string {
    return this.params.find(p => p.key === key).value;
  }

  public getAccessToken(): string {
    return this.getValueByKey("access_token");
  }
}
