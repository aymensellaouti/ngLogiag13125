import { computed, signal } from "@angular/core";

export class Cv {
  constructor(
    public id = 0,
    public name = "",
    public firstname = "",
    public job = "",
    public cin = "",
    public path = "",
    public age = 0,
  ) {}

  get fullname() {
    return `${this.firstname} ${this.name}`;
  }
}
