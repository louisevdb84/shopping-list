import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

import {User} from '../../models/user.model'

@Injectable()
    
export class AuthService {    
    isAuth: boolean;

    constructor(private http: Http) { }    
  //url: string = 'https://frozen-journey-92176.herokuapp.com/';  
    url: string = 'http://localhost:3050/'; 
    
    signinUser(user: User) {
        return this.http.post(this.url + 'signin', user);    
    }

    register(user: User) {
        return this.http.post(this.url + 'register', user);    
    }   
    
    ensureAuthenticated() {             
        return this.http.post(this.url + 'authenticated', {
            auth: localStorage.getItem('token')
        });
        
    }
    isAuthenticated() {
        return localStorage.getItem('token') != null;
    }
}
