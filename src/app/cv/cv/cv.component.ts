import { Component, inject, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { CvListComponent } from "../cv-list/cv-list.component";
import { CvCardComponent } from "../cv-card/cv-card.component";
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { BtcToUsdPipe } from '../../pipes/btc-to-usd.pipe';
import { LoggerService } from '../../services/logger.service';
import { SayHelloService } from '../../services/say-hello.service';
import { TodoService } from '../../todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { EmbaucheComponent } from "../embauche/embauche.component";

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [
    CvListComponent,
    CvCardComponent,
    DatePipe,
    UpperCasePipe,
    BtcToUsdPipe,
    CurrencyPipe,
    EmbaucheComponent
],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  cvService = inject(CvService);
  cvs: Signal<Cv[]> = this.cvService.cvs;
  selectedCv = this.cvService.selectedCv;
  today = new Date();
  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  // helloService = new SayHelloService();
  constructor(
    private logger: LoggerService,
    private helloService: SayHelloService
  ) {
    this.logger.log('cc je suis le cvComponent');
    this.helloService.hello();
    this.toastr.info('Bienvenu dans notre CvTech :D');
  }
}
