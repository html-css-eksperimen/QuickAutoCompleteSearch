import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map, catchError } from 'rxjs/operators';
import { BandaraResult } from '../models/BandaraResult';

@Injectable({
  providedIn: 'root'
})
export class BandaraDataService {

  private urlRequest = 'assets/id_airport.json';

  constructor(private http: HttpClient) { }

  getDataBandara() {

    const requestObservable = this.http.get(this.urlRequest).pipe(
      map((data: any) => {
        const arraydata = data.datajson;
        const panjangData = arraydata.length;

        console.log(panjangData);
        console.log(arraydata);
      }),
      catchError(this.handleErrors)
    );
    return requestObservable;
  }

  filterDataBandara() {

  }

  handleErrors(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
    }

  // return an observable with a user-facing error message
    return throwError(
    'Something bad happened; please try again later.');
  }
}
