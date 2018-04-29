import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserUsers } from '../components/users/user.d';
import { UserReg } from '../components/registration/userReg.d';
import { Test } from '../components/test/test.d';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { NgForm } from '@angular/forms';


@Injectable()

export class BackendService {
  private dummyUrl = 'https://blank-agency.org/users';
  constructor(private http: Http) {

  //  this.headers.append('Content-Type', 'application/json');

  }
//  headers = new Headers();

//  options = new RequestOptions({ headers: this.headers });


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
    return this.http.get('https://blank-agency.org/data');
  }
  getDbUsers(): Observable<Response> {
    return this.http.get('https://blank-agency.org/hallo');
  }

  /** POST: add a new user to the database */


  addUser2(user: UserUsers): Observable<Response> {
    return this.http.post('https://blank-agency.org/lol', user /* , this.options */ );
  }

  onSubmit(user: NgForm): Observable<Response> {
    return this.http.post('https://blank-agency.org/test', user /* , this.options */ );
  }
}
