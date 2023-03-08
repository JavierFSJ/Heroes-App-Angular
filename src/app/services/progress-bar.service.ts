import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap, switchMap, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  private _subjectProgressBar = new BehaviorSubject<boolean>(false);
  progressBar$: Observable<boolean> = this._subjectProgressBar.asObservable();


  constructor() { }

  showProgressBarUntilComplete<T>(obs$: Observable<T>): Observable<T> {
    return of(null)
      .pipe(
        tap((_) => this.showProgressBar()),
        switchMap(() => obs$),
        finalize(() => this.hideProgressBar())
      );
  }


  showProgressBar() {
    this._subjectProgressBar.next(true);
  }

  hideProgressBar() {
    this._subjectProgressBar.next(false);
  }


}
