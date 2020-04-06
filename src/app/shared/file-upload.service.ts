import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//import {ResponseOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  
  constructor(private httpClient: HttpClient) { }

  postFile(fileToUpload: File): Observable<boolean> { //return null;

    console.log(fileToUpload.name)
    const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    const endpoint = '..\\..\\assets';
    const formData: FormData = new FormData();
    formData.append('foto', fileToUpload, fileToUpload.name);
    return this.httpClient
      .post(endpoint, formData, { headers: headers })
      .map(() => { return true; })
      .catch((e) =>   Observable.throw(this.handleError(e))); //this.handleError(e));
  }
  handleError(e:any): void {
    console.log(e)
  }
}
