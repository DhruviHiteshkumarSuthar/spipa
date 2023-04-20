import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent {

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
      }
      else
      {
        alert('Sorry! You are not eligible.');
      }
    }
    else if(this.category=='SC' || this.category=='ST')
    {
      if(this.total>=90)
      {
        alert('Congratulations! You are eligible for course.');
      }
      else
      {
        alert('Sorry! You are not eligible.');
      }
    }
  }

}
