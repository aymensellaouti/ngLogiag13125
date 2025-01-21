import {  inject, Injectable, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { HttpClient } from '@angular/common/http';
import { APP_API } from '../../config/app-api.config';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class CvService {
  #cvs = signal([
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
    new Cv(4, 'Colpron', 'Julien', 'Dev', '6666', '', 20),
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
  http = inject(HttpClient);
  get cvs() {
    return this.#cvs.asReadonly();
  }

  #selectedCv = signal<Cv | null>(null);
  get selectedCv() {
    return this.#selectedCv.asReadonly();
  }

  /**
   * Retourne la liste des cvs
   * @returns Observable Cv[]
   */
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APP_API.cv);
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(APP_API.cv + id);
  }
  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param id
   * @returns { count: number }
   */
  deleteCvById(id: number): Observable<{ count: number }> {
    return this.http.delete<{ count: number }>(APP_API.cv + id);
  }
  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findFakeCvById(id: number): Cv | null {
    return this.cvs().find((cv) => cv.id == id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    let isDeleted = false;
    this.#cvs.update((cvs) => {
      return cvs.filter((actualCv) => {
        if (cv == actualCv) isDeleted = true;
        return cv != actualCv;
      });
    });
    // this.reserSelectedCv();
    return isDeleted;
  }

  selectCv(cv: Cv) {
    this.#selectedCv.set(cv);
  }
  reserSelectedCv() {
    this.#selectedCv.set(null);
  }
}
