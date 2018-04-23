import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Test } from './test.d';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  template: `
  <form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
    <input name="name" ngModel required #first="ngModel">
    <input name="password" ngModel reguired>
    <input name="email" ngModel required>
    <input name="age" ngModel>
    <button>Submit</button>
  </form>
`,
  styleUrls: ['./test.component.css'],
  providers: [BackendService]
})
export class TestComponent implements OnInit {

  test: Test[];


  constructor(private backendService: BackendService) { }

  ngOnInit() {
  }
  //  onSubmit() {
  //    this.hero = this.prepareSaveHero();
  //   this.heroService.updateHero(this.hero).subscribe(/* error handling */);
  //   this.rebuildForm();
  //  }
  // public addTest(name: string): void {
  //  const newUser: Test = { name } as Test;
  //  this.backendService.addTest(newUser).subscribe(data => this.test.push(newUser));
  // }
  onSubmit(f: NgForm) {
    this.backendService.onSubmit(f.value).subscribe(data => this.test.push(f.value));
  }
}
