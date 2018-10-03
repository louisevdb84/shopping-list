import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) { }  
  title = 'Shopping List';

  ngOnInit() {    

    this.authService.ensureAuthenticated().subscribe((res) => {
      if (res.json() === false) {
        localStorage.removeItem('token');
      }
    })        
  }
}
