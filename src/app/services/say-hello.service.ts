import { inject, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class SayHelloService {
  private loggerService = inject(LoggerService)
  // constructor(private  loggerService: LoggerService) {}
  hello() {
    this.loggerService.log('Hello le monde');
  }
}
