export abstract class DataFileObject {
  name: string;
  applyRemoteData(data: DataFileObject): void {
    if (typeof this !== typeof data) {
      throw new Error("Type missmatch");
    }

    for (const key of Object.keys(data)) {
      this[key] = data[key];
    }
  }
}
