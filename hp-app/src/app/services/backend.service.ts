import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class BackendService {
  private dummyUrl = 'http://localhost/3000/users';

  constructor(private http: Http) {}

  getAll(): Observable<any> {
    return this.http.get(this.dummyUrl + '?_sort=id&_order=desc')
      .map(response => response.json());
  }
  // getUsers() {
  //  return this.http.get(this.dummyUrl)
  //    .map(res => res.json());
  // }
  getUsers(): Observable<any> {
     return this.http.get('http://localhost:3000/users').map(res => res.json());
  }
}
