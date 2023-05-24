import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class DataService {
  
  constructor(@Inject(String) private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
      // .map(response => response.json())
    .pipe(catchError(this.handleError));
  }

  create(resource: any){
    return this.http.post(this.url, JSON.stringify(resource))
    .pipe(catchError(this.handleError));
  }

  update(resource: any) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
    .pipe(catchError(this.handleError));
  }

  delete(id: any) {
    return this.http.delete(this.url + '/' + id).
    pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage =''
    if (error.status === 400) {
      console.error('an error occured', error.error);
    } else {
      console.error('backend returned code ${error.status}, body was:', error.error);
      errorMessage= 'backend returned code ${error.status}, body was:', error.error;
    }
    errorMessage +='something bad happened; please try again later';
    return throwError(() => new Error(errorMessage));
  }
}
