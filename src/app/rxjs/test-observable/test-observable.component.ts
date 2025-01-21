import { AsyncPipe } from '@angular/common';
import { Component, inject, Signal, WritableSignal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-observable',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './test-observable.component.html',
  styleUrl: './test-observable.component.css',
})
export class TestObservableComponent {
  observable$: Observable<number>;
  // myStram = 0;
  toastr = inject(ToastrService);
  streamSignal: Signal<number>;
  constructor() {
    this.observable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        }
        observer.next(i--);
      }, 1000);
    });
    this.observable$.subscribe((val) => {
      console.log(val);
    });
    // setTimeout(() => {
    this.observable$.subscribe({
      next: (mesdonnes) => {
        this.toastr.info('' + mesdonnes);
      },
      complete: () => {
        this.toastr.error('Fin du compte à rebours !!!!!');
      },
    });
    // }, 3000);
    // this.observable$.subscribe({
    //   next: valeur => this.myStram = valeur
    // })
    this.streamSignal = toSignal(this.observable$, { initialValue: 0 });
  }
}
