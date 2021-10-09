import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
interface Employee {
  name: string;
  email: string;
  password: string;
  designation: [];
  band: string;
  reporting_manager: string;
  allocate_project: string;
  id: number;
}

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
  empRecords
  updateForm: FormGroup
  flagMessage: boolean
  empData // put single object of employee
  nameSearch: string=''
  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeData();

    //reative form for update employee details
    this.updateForm = new FormGroup({
      "name": new FormControl("", [Validators.required]),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null, [Validators.required, Validators.minLength(8)]),
      "designation": new FormControl(null, [Validators.required]),
      "band": new FormControl(null, [Validators.required]),
      "reporting_manager": new FormControl(null, [Validators.required]),
      "allocate_project": new FormControl(null, [Validators.required]),
    })
  }
  getEmployeeData() {
    this.empService.getEmployee().subscribe(info => {
      this.empRecords = info;
      console.log(this.empRecords);
    })
  }

  updateEmpData(data, id) {
    //get single record according his id number
    this.empService.getSingleEmployee(id).subscribe(info => {
      this.empData=info
      this.empData.reporting_manager=data.value.emp_reporting_manager;
      this.empData.band =data.value.emp_band;
      this.empData.allocate_project=data.value.emp_allocate_project;
      this.empData.designation=data.value.emp_designation;
      // console.log(data.value.emp_designation);
      console.log(this.empData);
      this.empService.putEmployee(this.empData, id).subscribe(() => {
        console.log("updated successfully");
        console.log(this.empData);
        this.getEmployeeData()
      })
    })

    // update record 
    

    // console.log(data.value);

  }

  deleteEmpData(index, id) {
    this.empService.deleteEmployee(id).subscribe(() => {
      this.flagMessage = true;
      let delBtn = document.getElementById('delete-close-' + index)
      delBtn.click()
      this.getEmployeeData()
    })
  }
}
