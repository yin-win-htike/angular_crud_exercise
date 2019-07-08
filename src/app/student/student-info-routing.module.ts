import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {  MatDialogModule} from '@angular/material';

import { StudentCreateComponent } from 'src/app/student/student-create/student-create.component';
import { StudentEditComponent } from 'src/app/student/student-edit/student-edit.component';
const routes: Routes = [
  { path: 'create-student', component: StudentCreateComponent, canActivate: [], runGuardsAndResolvers: 'always'}, 
  { path: 'edit-student', component: StudentEditComponent, canActivate: [], runGuardsAndResolvers: 'always'}
];

@NgModule({
  exports: [RouterModule],
  declarations: [
    StudentCreateComponent,
    StudentEditComponent
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
]
})
export class StudentInfoRoutingModule { }
