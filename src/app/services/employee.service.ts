import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getDataAPIURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(this.getDataAPIURL).pipe();
  }


}

