import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from '../app/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StartpageComponent } from './components/startpage/startpage.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UsersComponent } from './components/users/users.component';
import { ProjectComponent } from './components/project/project.component';
import { LoginComponent } from './components/login/login.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { TestComponent } from './components/test/test.component';
import { AlertComponent } from './alert/alert.component';
import { CerveauComponent } from './components/cerveau/cerveau.component';
import { LazyTestComponent } from './lazy/lazy-test/lazy-test.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ],
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectComponent,
    UsersComponent,
    RegistrationComponent,
    StartpageComponent,
    UserDetailComponent,
    TestComponent,
    AlertComponent,
    CerveauComponent,
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
