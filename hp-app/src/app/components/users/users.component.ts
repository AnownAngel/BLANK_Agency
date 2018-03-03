import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';
import { BackendService } from '../../services/backend.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [BackendService]

})
export class UsersComponent implements OnInit {

  // users = USERS;
  // private date: any;
  selectedUser: User;
  private name: string;
  @Input() id = '';

  constructor(private backendService: BackendService) {

  }

  ngOnInit() {
    this.getUsersById();
  }
  // getUsers() {
  //  this.backendService.getUsersById().subscribe(data => {
  //    this.name = data[0].Group.GroupName;
  // });
  // }
  getUsersById() {
    this.backendService.getUsersById().subscribe(data => {
      this.name = data[0];
  });
  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
