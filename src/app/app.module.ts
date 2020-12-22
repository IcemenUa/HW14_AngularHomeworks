import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CenzorComponent } from './pages/cenzor/cenzor.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { HeaderComponent } from './layouts/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PhoneBookModule } from './phone-book/phone-book.module';




@NgModule({
  declarations: [
    AppComponent,
    CenzorComponent,
    UserListComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PhoneBookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
