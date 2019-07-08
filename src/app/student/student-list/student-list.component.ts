import { Component, OnInit } from '@angular/core';
import { StudentInfoRequest } from 'src/app/zdto/student-list/StudentInfoRequest';
import { StudentInfoResponse } from 'src/app/zdto/student-list/StudentInfoResponse';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { StudentInfoService } from 'src/app/services/student-list/student-info.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  displayedColumns = ['id','firstName','lastName','address', 'edit', 'delete'];
  studentInfoRequest = new StudentInfoRequest();
  studentInfoResponseList : StudentInfoResponse[];
  studentInfoList = new MatTableDataSource();
  constructor(private studentInfoService: StudentInfoService, private router: Router) {
    this.studentInfoList = new MatTableDataSource([]);
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
    return false;
    };
   }

  ngOnInit() {
    this.getStudentList();
  }

  getStudentList(): void {
  
    this.studentInfoService.studentInfoList().subscribe(
      res => {
          let response= res as any;  
          this.studentInfoResponseList = response;
          console.log(response);
          this.studentInfoList = new MatTableDataSource(this.studentInfoResponseList);
      }
    );
    
  }

  createForm(): void{
    localStorage.setItem("studentInfoRequest", JSON.stringify(this.studentInfoRequest));
    this.router.navigate(["student/create-student"]);
  }
  edit(row) {
    localStorage.setItem("student", JSON.stringify(row));
    this.router.navigate(['student/edit-student']);
  }

  
  delete(row) {  
    this.studentInfoService.deleteStudentWithId(row).subscribe(_=>this.getStudentList());   
  }

}
