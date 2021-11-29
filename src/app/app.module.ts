import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { UsersModule } from './users/users.module';

import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
   
    FooterComponent,
        NavBarComponent,
        UserListComponent,
        FormComponent
      
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
