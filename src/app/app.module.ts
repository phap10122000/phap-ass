import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AdminClothesComponent } from './admin/admin-clothes/admin-clothes.component';
import { AdminShoesComponent } from './admin/admin-shoes/admin-shoes.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AdminClothesComponent, AdminShoesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
