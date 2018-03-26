import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserUsers } from '../components/users/user.d';
import { UserReg } from '../components/registration/userReg.d';
import { Test } from '../components/test/test.d';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';


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
    return this.http.get('http://localhost:3000/users');
  }
  getDbUsers(): Observable<Response> {
    return this.http.get('http://localhost:3000/hallo');
  }

  /** POST: add a new user to the database */


  addUser2(user: UserUsers): Observable<Response> {
    return this.http.post('http://localhost:3000/lol', user);
  }
  addTest(test: Test): Observable<Response> {
    return this.http.post('http://localhost:3000/test', test);
  }
}
