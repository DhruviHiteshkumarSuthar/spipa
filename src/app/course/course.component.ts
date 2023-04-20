import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  constructor(private router:Router){}

  cplus()
  {
    this.router.navigate(['/cplus'])
  }

  lead()
  {
    this.router.navigate(['/leader'])
  }

  public()
  {
    this.router.navigate(['/public'])
  }

}
