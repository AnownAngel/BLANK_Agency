import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Test } from './test.d';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [BackendService]
})
export class TestComponent implements OnInit {

  test: Test[];
  heroForm: FormGroup;

  constructor(private backendService: BackendService) { }

  ngOnInit() {
  }
//  onSubmit() {
//    this.hero = this.prepareSaveHero();
 //   this.heroService.updateHero(this.hero).subscribe(/* error handling */);
//   this.rebuildForm();
//  }
  public addTest(name: string): void {
    const newUser: Test = { name } as Test;
    this.backendService.addTest(newUser).subscribe(data => this.test.push(newUser));
    }
}
