export abstract class CharacterBase {
  public abstract save(): void;

  protected generateDownload(data, filename: string) {
    let blob = new Blob(["\ufeff" + data], {
      type: "application/json;charset=utf-8;"
    });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", filename);
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }
}
