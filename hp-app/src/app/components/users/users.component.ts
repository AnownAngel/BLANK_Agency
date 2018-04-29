import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DbUser } from '../user';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { UserUsers } from './user.d';
// import { USERS } from '../mock-users';
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
  users: UserUsers[];
  data: any;
  data2: any;
  selectedUser: User;
  selectedDbUser: DbUser;
  private name: string;
  private id: number;
  private age: number;
  private newUser: any;

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
  getUsers(): void {
    this.backendService.getUsers().subscribe(data => {
      console.log(data);
      this.id = data[0];
      this.age = data[0];
      this.name = data[0];
      this.data = data.json();
    });
  }
  onSelect(user: User): void {
    this.selectedUser = user;
  }
  onSelectDbUser(dbUser: DbUser): void {
    this.selectedDbUser = dbUser;
  }
  getDbUsers(): void {
    this.backendService.getDbUsers().subscribe(data => {
      console.log(data);
      this.name = data[0];
      this.id = data[0];
      this.data2 = data.json();

    });
  }
  public addUser2(name: string): void {
    const newUser: UserUsers = { name } as UserUsers;
    this.backendService.addUser2(newUser).subscribe(data => this.users.push(newUser));
  }
}
