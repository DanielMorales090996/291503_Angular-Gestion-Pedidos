import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  password: any;
  isLogedin: boolean;

  constructor(private usersService: UsersService,
  private router: Router) { }

  ngOnInit() {
    this.isLogedin = this.usersService.isLogedin();
  }

  onLogin(){
  if(this.user){
    this.usersService.login(this.user, this.password);
    this.isLogedin = this.usersService.isLogedin();
    this.router.navigateByUrl("/home");
  }
}

}
