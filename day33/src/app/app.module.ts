import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserDetailComponent } from './components/user-detail.component';
import { FriendsListComponent } from './components/friends-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    FriendsListComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
