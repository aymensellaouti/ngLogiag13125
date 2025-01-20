import { Component, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { CvListComponent } from "../cv-list/cv-list.component";
import { CvCardComponent } from "../cv-card/cv-card.component";
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { BtcToUsdPipe } from '../../pipes/btc-to-usd.pipe';
import { LoggerService } from '../../services/logger.service';
import { SayHelloService } from '../../services/say-hello.service';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CvListComponent, CvCardComponent, DatePipe, UpperCasePipe, BtcToUsdPipe, CurrencyPipe],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  cvs = signal([
    new Cv(
      1,
      'Primaud',
      'Alexandre',
      'Dev',
      '1234',
      'rotating_card_profile2.png',
      20
    ),
    new Cv(
      2,
      'Boudraa',
      'Dalil',
      'Dev',
      '4444',
      'rotating_card_profile3.png',
      20
    ),
    new Cv(
      3,
      'Hmami',
      'Jihane',
      'Dev',
      '55555',
      'rotating_card_profile.png',
      20
    ),
    new Cv(
      4,
      'Colpron',
      'Julien',
      'Dev',
      '6666',
      '',
      20
    ),
    new Cv(
      5,
      'Cote',
      'Mathieu',
      'Dev',
      '777',
      'rotating_card_profile3.png',
      20
    ),
    new Cv(
      6,
      'Charpentier',
      'Samuel',
      'Dev',
      '8888',
      'rotating_card_profile2.png',
      20
    ),
    new Cv(7, 'Jobin', 'Yan', 'Dev', '999', '        ', 20),
    new Cv(
      8,
      'Laliberté-Beaupré',
      'Robin ',
      'Dev',
      '1000',
      'rotating_card_profile2.png',
      20
    ),
  ]);
  selectedCv = signal<Cv | null>(null);
  today = new Date();
  // helloService = new SayHelloService();
  constructor(
    private logger: LoggerService,
    private helloService: SayHelloService
  ) {
    this.logger.log('cc je suis le cvComponent');
    this.helloService.hello();
  }
  getSelectedCv(cv: Cv) {
    this.selectedCv.set(cv);
  }
}
