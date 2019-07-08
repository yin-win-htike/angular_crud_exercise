import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
const routes: Routes = [
  {
    path: 'student',
    component: StudentListComponent
  },
  { path: 'student', loadChildren: "./student/student-info-routing.module#StudentInfoRoutingModule"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
