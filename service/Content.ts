export default class Content {
  static getContentUrl(chain: number[]) {
    return "content/" + chain.join("~");
  }

  static getReadableUrl(slugs: string[]) {
    return "content/" + slugs.join("~");
  }
}
