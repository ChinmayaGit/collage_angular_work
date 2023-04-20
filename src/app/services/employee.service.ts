import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {

  }
  getData() {
    console.log('get data from service')
  }
}


