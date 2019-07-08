import { Component, OnInit } from '@angular/core';
import { CreateStudent } from 'src/app/zdto/student-list/CreateStudent';
import { StudentInfoService } from 'src/app/services/student-list/student-info.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  newStudentForm;
  student = new CreateStudent();
  constructor(private studentService: StudentInfoService, private router: Router) { }

  ngOnInit() {
    this.newStudentForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      address: new FormControl()
    });
  }
 
  register() {
    if (this.newStudentForm.valid) {
      this.studentService.studentRegistration(this.student).subscribe(_=>this.router.navigate(['student']));
    } else {
      return;
    } 
  }


}
