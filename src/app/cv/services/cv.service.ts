import {  Injectable } from '@angular/core';
import { Cv } from '../model/cv';



@Injectable({
  providedIn: 'root',
})
export class CvService {



  /**
   * Retourne la liste des cvs
   * @returns signal Cv[]
   */
  getCvs(): Cv[] {
    return [];
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    return false;
  }
}
