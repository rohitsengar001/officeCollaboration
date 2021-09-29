import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
  empRecords
  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.empService.getEmployee().subscribe(info=>{
      this.empRecords=info;
      console.log(this.empRecords);
    })
  }

  
}
