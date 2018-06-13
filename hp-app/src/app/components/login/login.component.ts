import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule, FormGroup } from '@angular/forms'; // <-- NgModel lives here
import { BackendService } from '../../services/backend.service';
import { UserLog } from './userLog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  template: `
  <div class="container">
  <div class="row">
    <div class="col-sm">
      <form #f="ngForm" ngNativeValidate (ngSubmit)="onSubmitLogin(f)">
        <div [hidden]="f.submitted">
          <h1>Login</h1>
          <p>Please fill in this form to login.</p>

          <hr>
          <div class="imgcontainer">

          </div>

            <label for="name">
              <b>Name</b>
            </label>
            <input type="text" name="name" placeholder="Enter Name" ngModel required
            oninvalid="this.setCustomValidity('Enter User Name Here')">

            <label for="psw">
              <b>Password</b>
            </label>
            <input type="password" name="password" placeholder="Enter Password" ngModel required
            oninvalid="this.setCustomValidity('Enter Password Here')">

            <div class="clearfix">
              <button type="button" class="cancelbtn" (click)="cancel2(f)">Cancel</button>
              <button type="submit" class="signupbtn">Sign Up</button>
            </div>
        </div>

        <div class="submitted-message" *ngIf="f.submitted">
          <p>Registration succeeded! {{ f.value.name }}!</p>
        </div>
        <a *ngIf="f.submitted" href="/login">Back</a>
        <a *ngIf="f.submitted"> | </a>
        <a *ngIf="f.submitted" href="#">Home</a>
      </form>
    </div>
  </div>
</div>
`,
  styleUrls: ['./login.component.css'],
  providers: [BackendService]
})

export class LoginComponent implements OnInit {

  constructor(private backendService: BackendService) { }

  private user: UserLog[];

  ngOnInit() {
  }
  onSubmitLogin(f: NgForm) {
    this.backendService.onSubmitLogin(f.value).subscribe(data => this.user.push(f.value));
    if (f.valid) {
      console.log('Form Submitted!');
      f.reset();
    }
  }
  cancel2(f: NgForm) {
    f.reset();
  }
}
