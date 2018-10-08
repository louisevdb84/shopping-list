import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
declare var jquery:any;
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {  
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {    
  }

  show() {
    if (localStorage.getItem('token')) {
      return true;
    }      
    return false;    
  }  

  logout() {    
    localStorage.removeItem('token');   
    this.router.navigate(['/signin']);
  }

}
