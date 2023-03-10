import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Models/api-models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseApiUrl = "https://localhost:44374"

  constructor(private httpClient: HttpClient) {   }
  getallstudents(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.baseApiUrl + '/students');
  }

}
