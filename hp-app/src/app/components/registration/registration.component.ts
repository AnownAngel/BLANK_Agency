import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { UserReg } from './userReg.d';
import { BackendService } from '../../services/backend.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [BackendService]

})
export class RegistrationComponent implements OnInit {

  private users: UserReg[];

  constructor(private backendService: BackendService) {

  }

  ngOnInit() {
  }

}
