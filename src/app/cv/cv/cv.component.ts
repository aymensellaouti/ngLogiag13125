import { Component, inject, OnDestroy, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { CvListComponent } from "../cv-list/cv-list.component";
import { CvCardComponent } from "../cv-card/cv-card.component";
import { AsyncPipe, CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { BtcToUsdPipe } from '../../pipes/btc-to-usd.pipe';
import { LoggerService } from '../../services/logger.service';
import { SayHelloService } from '../../services/say-hello.service';
import { TodoService } from '../../todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { EmbaucheComponent } from "../embauche/embauche.component";
import { catchError, Observable, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

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
    EmbaucheComponent,
    AsyncPipe
],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent implements OnDestroy {
  cvService = inject(CvService);
  //cvs$: Observable<Cv[]>;
  cvs$: Observable<Cv[]> = this.cvService.getCvs().pipe(
    catchError(
      e => {
        this.toastr.error(`Les cvs sont fake merci de contacter l'admin`);
        return of(this.cvService.cvs());
      }
    )
  );
  cvsSignal: Signal<Cv[]> = toSignal(this.cvs$, {initialValue: []});
  selectedCv = this.cvService.selectedCv;
  today = new Date();
  todoService = inject(TodoService);
  toastr = inject(ToastrService);
  // helloService = new SayHelloService();
  constructor() {
    // this.cvService.getCvs().subscribe({
    //   next: cvs => this.cvs = cvs,
    //   error: e => {
    //     this.cvs = this.cvService.cvs();
    //     this.toastr.error(`Les cvs sont fake merci de contacter l'admin`)
    //   }
    // })
  }
  ngOnDestroy(): void {
    this.cvService.reserSelectedCv();
  }
}
