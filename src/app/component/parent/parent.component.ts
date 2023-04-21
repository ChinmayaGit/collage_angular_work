import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) childComponent: ChildComponent | undefined;
  property: any[] = [];
  ChildData: any;
  xyzProperty: any[] = [];
  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.service.getData().subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    }
    );
    this.childComponent?.passGiftParent();
    this.property = [
      { name: 'John', cost: 1 },
      { name: 'Doe', cost: 2 },
      { name: 'Smith', cost: 3 },
    ];
    this.xyzProperty = [
      { name: 'xyz', cost: 1 },
      { name: 'gsha', cost: 2 },
      { name: 'sad', cost: 3 },
    ];
  }
  dataFromChild(data: any) {
    this.ChildData = data;
    console.log(data);
  }
}

