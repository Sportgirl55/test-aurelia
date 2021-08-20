import { WebAPI } from "./web-api";
import { inject } from "aurelia-framework";
import { LoadingIndicator } from "./resources/elements/loading-indicator";

@inject(WebAPI)
export class App {
  constructor(api) {
    this.api = api;
    this.items = [];
    this.text = "";
    this.textArray = [];
  }
  message = "Превед, мир!!";
  title = "Я пишу приложение на Аурелии. И это блокнотик";

  addText() {
    if (this.text) {
      this.textArray.push({
        texts: this.text,
      });
    }
    this.text = "";
  }

  getItems() {
    //  this.api.getList((items) => (this.items = items));
     this.api.getList((items) => (this.items = items));
     this.loading ? LoadingIndicator : this.message;
  }
}
