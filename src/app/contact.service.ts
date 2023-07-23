import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: any[] = [];

  constructor(private http: HttpClient) { }

  addContact(contactForm: any):Observable<Object>{
    return this.http.post<any>(`${environment.baseURL}/post`, contactForm);
  }

  addEmail(emailForm: any): Observable<Object>{
    return this.http.post<any>(`${environment.baseURL}/postemail`, emailForm);
  }


}
