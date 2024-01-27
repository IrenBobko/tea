import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  getPopup(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
        observer.next(true);
    });
  }

}
