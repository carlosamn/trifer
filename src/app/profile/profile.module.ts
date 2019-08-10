//  Core modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//  Components
import { ProfileComponent } from './profile.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  imports: [
  	BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    AngularFontAwesomeModule
  ],
  
  exports: [],
  declarations: [ProfileComponent, ProfileHeaderComponent]
})
export class ProfileModule { }