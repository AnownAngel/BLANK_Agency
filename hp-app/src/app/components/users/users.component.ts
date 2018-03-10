import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';
import { BackendService } from '../../services/backend.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [BackendService]

})
export class UsersComponent implements OnInit {

  // users = USERS;
  // private date: any;
  data: any;
  selectedUser: User;
  private name: string;
  private id: number;
  private age: number;
  @Input() id2 = '';

  constructor(private backendService: BackendService) {

  }

  ngOnInit() {
    this.getUsers();
    this.getDbUsers();
  }
  // getUsers() {
  //  this.backendService.getUsersById().subscribe(data => {
  //    this.name = data[0].Group.GroupName;
  // });
  // }
  getUsers() {
    this.backendService.getUsers().subscribe(data  => {
      console.log(data);
      this.id = data[0];
      this.age = data[0];
      this.name = data[0];
      this.data = data;
    });
  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }
  getDbUsers() {
    this.backendService.getDbUsers().subscribe(data => {
      console.log(data);
      this.name = data[0];
      this.id = data[0];
      this.data = data;
    });
  }
}
