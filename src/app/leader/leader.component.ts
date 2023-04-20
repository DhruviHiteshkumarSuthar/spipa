import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leader',
  templateUrl: './leader.component.html',
  styleUrls: ['./leader.component.css']
})
export class LeaderComponent {

  category :string= '';
  total :number=0;

  constructor (private router: Router){}

  check()
  {
    if(this.category=='GEN' || this.category=='OBC')
    {
      if(this.total>=110)
      {
        alert('Congratulations! You are eligible for course.');
        this.router.navigate(['/confirm']);
      }
      else
      {
        alert('Sorry! You are not eligible.');
        this.router.navigate(['/course']);
      }
    }
    else if(this.category=='SC' || this.category=='ST')
    {
      if(this.total>=90)
      {
        alert('Congratulations! You are eligible for course.');
        this.router.navigate(['/confirm']);
      }
      else
      {
        alert('Sorry! You are not eligible.');
        this.router.navigate(['/course']);
      }
    }
  }

}
