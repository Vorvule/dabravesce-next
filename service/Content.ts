export default class Content {
  static getContentUrl(chain: number[]) {
    return "content/" + chain.join("-");
  }
}
