import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AboutComponent } from './about/about.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { UserlandingpageComponent } from './userlandingpage/userlandingpage.component';
import { AdminlandingpageComponent } from './adminlandingpage/adminlandingpage.component';
import { AdmincustomerlistComponent } from './admincustomerlist/admincustomerlist.component';
import { AdminroomlistComponent } from './adminroomlist/adminroomlist.component';
import { AdmineventComponent } from './adminevent/adminevent.component';
import { AdminaccountComponent } from './adminaccount/adminaccount.component';
import { RommsdetailsComponent } from './rommsdetails/rommsdetails.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'rooms',  component: RoomsComponent},
  {path: 'roomsdetails/:id', component: RommsdetailsComponent },
  {path: 'blog', component: BlogComponent },
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'adminnav', component: AdminnavComponent },
  {path: 'userlandingpage', component: UserlandingpageComponent },
  {path: 'adminlandingpage', component: AdminlandingpageComponent },
  {path: 'admincustomerlist', component: AdmincustomerlistComponent },
  {path: 'adminroomlist', component: AdminroomlistComponent },
  {path: 'adminevent', component: AdmineventComponent },
  {path: 'adminaccount', component: AdminaccountComponent },
  {path: 'adminlogin', component: AdminloginComponent },
  {path: 'contact', component: ContactusComponent},
  {path: 'booking', component: BookingComponent },
// {path: '', component: NavComponent: children [
//   {path: '', redirectTo: '/home', pathMatch: 'full'},
//   {path: 'home', component: HomeComponent},
//   {path: 'about', component: AboutComponent}
// ]},

// {path: 'about', component: AboutComponent},
{path: '**', component: NotFoundComponent}, 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
