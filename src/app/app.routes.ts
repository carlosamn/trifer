import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core'
import { LoginComponent } from './login/login.component'

const APPROUTES: Routes = [
		  { path: '', redirectTo: 'login',pathMatch: 'full' },
          { path: 'login', component: LoginComponent },
          { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [
  RouterModule.forRoot(APPROUTES)
  ],
  exports:[
  	RouterModule
  ]})

export class APP_ROUTER {}