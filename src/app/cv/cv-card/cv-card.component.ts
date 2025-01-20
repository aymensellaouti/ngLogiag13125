import { Component, inject, input } from '@angular/core';
import { Cv } from '../model/cv';
import { DefaultImagePipe } from '../pipes/default-image.pipe';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv-card',
  standalone: true,
  imports: [DefaultImagePipe],
  templateUrl: './cv-card.component.html',
  styleUrl: './cv-card.component.css',
})
export class CvCardComponent {
  cv = input<Cv | null>(null);
  embaucheService = inject(EmbaucheService);
  toast = inject(ToastrService);

  embuacher() {
    const cv = this.cv();
    if (cv) {
      if (this.embaucheService.embaucher(cv)) {
        this.toast.success(`${cv.fullname} a été pré sélectionné avec succès`)
      } else {
        this.toast.warning(`${cv.fullname} est déjà pré sélectionné`);
      }
    }
  }
}
