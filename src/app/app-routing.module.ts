import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CenzorComponent } from './pages/cenzor/cenzor.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { PhoneBookParentComponent } from './phone-book/phone-book-parent/phone-book-parent.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'Cenzor', component: CenzorComponent },
  { path: 'UserList', component: UserListComponent },
  {
    path: 'header', component: HeaderComponent, children: [
      { path: 'Cenzor', component: CenzorComponent },
      { path: 'UserList', component: UserListComponent },
      { path: 'PhoneBook', component: PhoneBookParentComponent }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
