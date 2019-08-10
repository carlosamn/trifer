import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms'

import { NgModule } from '@angular/core';
import { APP_ROUTER } from './app.routes'
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileHeaderComponent } from './profile/profile-header/profile-header.component';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    ProfileHeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    APP_ROUTER,
    AngularFontAwesomeModule,
    FormsModule
  ],
  exports: [RouterModule,ProfileHeaderComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
