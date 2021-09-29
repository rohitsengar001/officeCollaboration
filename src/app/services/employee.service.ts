import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }
  postEmployee(data){
    return this.http.post<any>(`${environment.baseUrl}/employee`,data);
  }
  putEmployee(data,id){
    return this.http.put<any>(`${environment.baseUrl}/employee/`+id,data)
  }
  getEmployee(){
    return this.http.get(`${environment.baseUrl}/employee/`)
  }
}
