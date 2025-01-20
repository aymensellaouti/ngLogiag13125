import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Cv } from '../model/cv';


@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  #embauchees: WritableSignal<Cv[]> = signal<Cv[]>([]);

  getEmbauchees(): Signal<Cv[]> {
    return this.#embauchees.asReadonly();
  }
  /**
   *
   * Permet d'embaucher des cvs
   *
   * @param cv - le Cv à embaucher
   * @returns {boolean} return true si embauchée false sinon
   */
  embaucher(cv: Cv): boolean {
    if (!this.#embauchees().includes(cv)) {
      this.#embauchees.update(cvs => ([...cvs, cv]))
      return true;
    }
    return false;
  }
}
