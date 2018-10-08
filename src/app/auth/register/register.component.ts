import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User; 
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {         
  }

  onSignup(form: NgForm) {    
    this.user = new User(null, form.value.username, form.value.password);        
    this.authService.register(this.user)
      .subscribe(
      (res) => {
        localStorage.setItem('token', res.json());   
        this.router.navigate(['/']);
      }
    )
  }

}
