import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Constant } from 'src/environments/constant';
import { CreateStudent } from 'src/app/zdto/student-list/CreateStudent';
import { StudentInfoResponse } from 'src/app/zdto/student-list/StudentInfoResponse';
@Injectable({
    providedIn: 'root'
  })
export class StudentInfoService {
  
    constructor(private http: HttpClient) { }

    studentInfoList() {
      return this.http.get(Constant.API_URL+"project/students")
    }

    studentRegistration(createStudent:CreateStudent){
      return this.http.post(Constant.API_URL+"project/saveOrUpdateStudent", createStudent)
    }

    studentEdit(studentInfoResponse:StudentInfoResponse){
      return this.http.post(Constant.API_URL+"project/saveOrUpdateStudent", studentInfoResponse)
    }

    deleteStudentWithId(id){
      return this.http.post(Constant.API_URL + "project/delete-with-id", id)
    } 
}