import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http:HttpClient) { }

  addEmployee(date: any): Observable<any>{
    return this._http.post('http://localhost:3000/employess', date)
  }

  getEmployeesList(): Observable<any>{
    return this._http.get('http://localhost:3000/employess')
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/employess/${id}`)
  }


}
