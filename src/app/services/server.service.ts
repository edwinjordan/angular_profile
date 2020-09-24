import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  endpoint:string = 'http://127.0.0.1:85/viyon';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  public getSetups(){
    return this.http.get(`${this.endpoint}/Setup/ajax_edit`);
  }

  public getSetups_en(){
    return this.http.get(`${this.endpoint}/Setup/ajax_edit_en`);
  }

  public getSetups_jp(){
    return this.http.get(`${this.endpoint}/Setup/ajax_edit_jp`);
  }
}
