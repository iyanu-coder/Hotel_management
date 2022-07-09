import { Injectable, Output, EventEmitter } from "@angular/core";
import { map } from 'rxjs/Operators';
import { HttpClient } from "@angular/common/http";
import { Users } from "./users";
import { Admin, Rooms, Event } from "./admin";

@Injectable({
    providedIn: 'root'
})

export class ApiService {
          

      baseUrl: string = "http://localhost/HOTEL BOOKING MANAGEMENT/BACKEND";
      @Output() getLoggedInName: EventEmitter<any> = new EventEmitter;
      constructor(private httpClient : HttpClient) { }


      public adminevents(
        contents:any,
        venue:any,
        entryfee:any,
        
        ){
      
      return this.httpClient.post<any>(this.baseUrl + '/hotelevents.php', { 
          contents, venue, entryfee})
      .pipe(map(Event => {

        return Event;
      }));
    }



      public adminrooms(
        contentsofroom:any,
        priceofroom:any,
        typeofroom:any,
        sizeofroom:any
        
        ){
      
      return this.httpClient.post<any>(this.baseUrl + '/listofrooms.php', { 
          contentsofroom, priceofroom, typeofroom, sizeofroom})
      .pipe(map(Rooms => {

        return Rooms;
      }));
    }


      public adminlogin(
        email:any, 
        password:any
        ){
      
      return this.httpClient.post<any>(this.baseUrl + '/adminlogin.php', { 
          email, password})
      .pipe(map(Admin => {

        // console.error();
        alert("sucess")
        return Admin;
      }));

    } 
    

  
      public userlogin(
          email:any, 
          password:any
          ){
        
        return this.httpClient.post<any>(this.baseUrl + '/login.php', { 
            email, password})
        .pipe(map(Users => {
          // this.setToken(Users[0].name);
          // this.getLoggedInName.emit(true);
          return Users;
        }));
      }
   
      public userregistration(
          f_name:any,
          l_name:any,
          email:any,
          country:any,
          phone_number:any,
          username:any,
          password:any
          ){
              return this.httpClient.post<any>(this.baseUrl + '/register.php',
              {
                f_name,l_name,email,country,phone_number,username,password }
                
                )
                .pipe(map(Users => {
                    return Users;
                }));
          }

    
          //  token
        // setToken(token: string){
        //     localStorage.setItem('token', token);
        // }
        // getToken(){
        //     return localStorage.getItem('token');
        // }
        // deleteToken(){
        //     localStorage.removeItem('token');
        // }
        // isLoggedIn(){
        //     const usertoken = this.getToken();
        //     if (usertoken != null) {
        //     return true
        //     }
        //     return false;
        // }
            
    
 }

