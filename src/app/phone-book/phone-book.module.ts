import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneBookParentComponent } from './phone-book-parent/phone-book-parent.component';
import { PhoneBookChildComponent } from './phone-book-child/phone-book-child.component';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { OrderModule } from 'ngx-order-pipe';
import { SearchPipe } from '../shared/pipes/search.pipe';


@NgModule({
  declarations: [PhoneBookParentComponent, PhoneBookChildComponent,SearchPipe],
  imports: [
    CommonModule,FormsModule,FormsModule,AppRoutingModule,OrderModule
  ],
  exports: [
    PhoneBookParentComponent
  ],
})
export class PhoneBookModule { }
