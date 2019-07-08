import { Component, OnInit } from '@angular/core';
import { StudentInfoResponse } from 'src/app/zdto/student-list/StudentInfoResponse';
import { StudentInfoService } from 'src/app/services/student-list/student-info.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  editStudentForm;
  student = new StudentInfoResponse();
  constructor(private studentService: StudentInfoService, private router: Router) { 
  }

  ngOnInit() {
    this.student = JSON.parse(localStorage.getItem("student"));
    this.editStudentForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      address: new FormControl()
    });
  }

  edit() {
    if (this.editStudentForm.valid) {
      this.studentService.studentEdit(this.student).subscribe(_=>this.router.navigate(['student'])
      );
    } else {
      return;
    }
  }

}
