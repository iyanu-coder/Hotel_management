import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RoomsComponent } from './rooms/rooms.component';
import { BlogComponent } from './blog/blog.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { UserlandingpageComponent } from './userlandingpage/userlandingpage.component';
import { AdminlandingpageComponent } from './adminlandingpage/adminlandingpage.component';
import { AdminroomlistComponent } from './adminroomlist/adminroomlist.component';
import { AdmineventComponent } from './adminevent/adminevent.component';
import { AdminaccountComponent } from './adminaccount/adminaccount.component';
import { AdmincustomerlistComponent } from './admincustomerlist/admincustomerlist.component';
import { RommsdetailsComponent } from './rommsdetails/rommsdetails.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    ContactusComponent,
    RoomsComponent,
    BlogComponent,
    AdminnavComponent,
    UserlandingpageComponent,
    AdminlandingpageComponent,
    AdminroomlistComponent,
    AdmineventComponent,
    AdminaccountComponent,
    AdmincustomerlistComponent,
    RommsdetailsComponent,
    AdminloginComponent,
    BookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})   
export class AppModule { }
