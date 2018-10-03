import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService) { }  

  ngOnInit() {
    
  }

  onSignin(form: NgForm) {
    this.user = new User(null, form.value.username, form.value.password);        
    this.authService.signinUser(this.user)
      .subscribe(
      (res) => {
        localStorage.setItem('token', res.json());         
      }
    )    
  }

}
