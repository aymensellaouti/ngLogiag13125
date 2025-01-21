import { Component, inject, signal, Signal } from "@angular/core";
import { Cv } from "../model/cv";
import { CvService } from "../services/cv.service";
import { ActivatedRoute, Router } from "@angular/router";
import { APP_ROUTES } from "../../config/app-routes.config";
import { catchError, EMPTY } from "rxjs";
import { toSignal } from "@angular/core/rxjs-interop";
import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
  standalone: true,
})
export class DetailsCvComponent {
  acr = inject(ActivatedRoute);
  toastr = inject(ToastrService);
  private id = this.acr.snapshot.params['id'];
  cvService = inject(CvService);
  cv$ = this.cvService.findCvById(this.id).pipe(
    catchError(
      e => {
        this.router.navigate([APP_ROUTES.cv]);
        return EMPTY;
      }
    )
  );
  cv: Signal<Cv | null> = toSignal(this.cv$,{initialValue: null});
  router = inject(Router);
  constructor() {
    // this.cvService.findCvById(id).subscribe({
    //   next: (cv) => this.cv.set(cv),
    //   error: (e) => this.router.navigate([APP_ROUTES.cv]),
    // });
    // this.cv.set(this.cvService.findFakeCvById(id));
    // if (!this.cv()) ;
  }
  deleteCv() {
    const cv = this.cv();
    if (cv) {
      this.cvService.deleteCvById(cv.id).subscribe({
        next:(_) => {
          this.router.navigate([APP_ROUTES.cv]);
        },
        error: (e) => {
          this.toastr.error('Veuillez contacter l admin');
        }
      });
    }
  }
}
