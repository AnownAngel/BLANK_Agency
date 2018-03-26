import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from '../components/project/project.component';
import { UsersComponent } from '../components/users/users.component';
import { RegistrationComponent } from '../components/registration/registration.component';
import { AppComponent } from '../app.component';
import { StartpageComponent } from '../components/startpage/startpage.component';
import { LoginComponent } from '../components/login/login.component';
import { TestComponent } from '../components/test/test.component';
const routes: Routes = [
  { path: '', component: StartpageComponent, data: { animation: '' } },
  { path: 'login', component: LoginComponent, data: { animation: 'login' } },
  { path: 'project', component: ProjectComponent, data: { animation: 'project' } },
  { path: 'users', component: UsersComponent, data: { animation: 'users' } },
  { path: 'registration', component: RegistrationComponent, data: { animation: 'registration' } },
  { path: 'test', component: TestComponent, data: { animation: 'test' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
