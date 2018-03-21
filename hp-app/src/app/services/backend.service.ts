import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User2 } from 'c:/Daten/Projects/job repository/BLANK_Agency/hp-app/src/app/components/users/user.d'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';


@Injectable()

export class BackendService {
  private dummyUrl = 'http://localhost/3000/users';

  constructor(private http: Http) { }


  getAll(): Observable<any> {
    return this.http.get(this.dummyUrl + '?_sort=id&_order=desc')
      .map(response => response.json());
  }


  // getAll(): Observable<any> {
  //  return this.http.get(this.dummyUrl + '?_sort=id&_order=desc')
  //    .map(response => response.json());
  // }

  // getUsers() {
  //  return this.http.get(this.dummyUrl)
  //    .map(res => res.json());
  // }
  getUsers(): Observable<Response> {
    return this.http.get('http://94.130.24.207:3000/users');
  }
  getDbUsers(): Observable<Response> {
    return this.http.get('http://localhost:3000/hallo');
  }

  /** POST: add a new hero to the database */
  addUser(user: User2): Observable<Response> {
    return this.http.post('http://localhost:3000/lol', user);
  }

}
