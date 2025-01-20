import { Injectable } from "@angular/core";

export interface LoggerInterface {
  log(message: any): void;
}
@Injectable({
  providedIn: 'root'
})
export class LoggerService implements LoggerInterface {
  log(message: any): void {
    console.log('From Logger Service : ');
    console.log({message});
  }
}
