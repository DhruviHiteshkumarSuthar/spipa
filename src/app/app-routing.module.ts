import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { CplusComponent } from './cplus/cplus.component';
import { PublicComponent } from './public/public.component';
import { LeaderComponent } from './leader/leader.component';
import { ConfirmComponent } from './confirm/confirm.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'course', component: CourseComponent},
  {path: 'cplus', component: CplusComponent},
  {path: 'public', component: PublicComponent},
  {path: 'leader', component: LeaderComponent},
  {path: 'confirm', component: ConfirmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
