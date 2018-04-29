import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule, FormGroup } from '@angular/forms'; // <-- NgModel lives here
import { UserReg } from './userReg.d';
import { BackendService } from '../../services/backend.service';
import { Observable } from 'rxjs/Observable';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  template: `
  <div class="container">

  <div class="row">
    <div class="col-sm">
      <form #f="ngForm" ngNativeValidate (ngSubmit)="onSubmit(f)">
        <div [hidden]="f.submitted">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>

        <hr>

        <label for="age">
          <b>Age</b>
        </label>
        <input type="text" name="age" placeholder="Enter Age" ngModel required>

        <label for="name">
          <b>Name</b>
        </label>
        <input type="text" name="name" placeholder="Enter Name" ngModel required>

        <label for="email">
          <b>Email</b>
        </label>
        <input type="text" name="email" placeholder="Enter Email" ngModel required>

        <label for="psw">
          <b>Password</b>
        </label>
        <input type="password" name="password" placeholder="Enter Password" ngModel required>

        <label for="psw-repeat">
          <b>Repeat Password</b>
        </label>
        <input type="password" name="psw-repeat" placeholder="Repeat Password"
        ngModel required oninvalid="this.setCustomValidity('Enter User Name Here')">



        <p>By creating an account you agree to our
          <a href="#" style="color:dodgerblue">Terms & Privacy</a>.
        </p>

        <div class="clearfix">
          <button type="button" class="cancelbtn" (click)="cancel(f)">Cancel</button>
          <button type="submit" class="signupbtn">Sign Up</button>
        </div>

      </div>
      <div class="submitted-message" *ngIf="f.submitted">
      <p>Registration succeeded! {{ f.value.name }}!</p>
    </div>
    <a *ngIf="f.submitted" href="/registration">Back</a> <a *ngIf="f.submitted"> | </a> <a *ngIf="f.submitted" href="#">Home</a>
    </form>
  </div>

`,
  styleUrls: ['./registration.component.css'],
  providers: [BackendService]

})
export class RegistrationComponent implements OnInit {

  private users: UserReg[];

  constructor(private backendService: BackendService) {

  }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    this.backendService.onSubmit(f.value).subscribe(data => this.users.push(f.value));
    if (f.valid) {
      console.log('Form Submitted!');
      f.reset();
    }
  }
  cancel(f: NgForm) {
    f.reset();
  }
}
