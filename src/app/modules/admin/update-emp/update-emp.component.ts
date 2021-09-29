import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
  empRecords
  updateForm: FormGroup
  flagMessage: boolean
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

  deleteEmpData(index, id) {
    this.empService.deleteEmployee(id).subscribe(() => {
      this.flagMessage = true;
      let delBtn = document.getElementById('delete-close-' + index)
      delBtn.click()
      this.getEmployeeData()
    })
  }
}
