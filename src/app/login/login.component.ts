import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string ='';
  password: string ='';

  constructor(private router: Router){}

  login(){
    const letter=/^[A-Z][a-z]+$/;
    const pwd=/^[A-Za-z]+([.#@%]?\w+)$/;
    const pwd2=/^[A-Za-z]+[0-9]+$/;
    if(letter.test(this.username) && pwd2.test(this.password))
    {
            alert('Login Successful');
            this.router.navigate(['/home']);
    }
    else{
      alert('Enter name and password in correct format')
    }
  }

}
