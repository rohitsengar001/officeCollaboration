import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {
  bands = ['band1', 'band2', 'band3', 'band4', 'band5', 'band6', 'band7'];
  group = {
    "band7": [
      "CEO"
    ],
    "band6": [
      "CTO"
    ],
    "band5": [
      "Vice President"
    ],
    "band4": [
      "Engineering Director"
    ],
    "band3": [
      "Engineering Manager"
    ],
    "band2": [
      "Lead Engineer",
      "QA",
      "IT Consultant",
      "Finance Consultant",
      ""
    ],
    "band1": [
      "Software Engineer",
      "QA",
      "IT Consultant",
      "Finance Consultant",
      ""
    ]
  }

  empDesignation = [""]
  // dropdownList = [];
  // selectedItems=[];
  // dropdownSettings:IDropdownSettings={};
  employeeForm: FormGroup
  successFlag = false;
  selectedBand;
  empdesArray;
  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    designation: []
    this.employeeForm = new FormGroup({
      "name": new FormControl(null, [Validators.required]),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null, [Validators.required, Validators.minLength(8)]),
      "designation": new FormControl(null, [Validators.required]),
      "band": new FormControl(null, [Validators.required]),
      "reporting_manager": new FormControl(null, [Validators.required]),
      "allocate_project": new FormControl(null, [Validators.required]),
    })

  }

  onsubmit() {
    console.log(this.employeeForm.value);
    this.empService.postEmployee(this.employeeForm.value).subscribe(info => {
      console.log(info);
      this.employeeForm.reset()
      this.successFlag = true;

    })
  }
  getSelectedBand() {
    let info=""
    console.log(this.employeeForm.value.band);
    this.selectedBand=this.employeeForm.value.band
    for(let x in this.group){
      if(x==this.selectedBand){
        this.empdesArray=this.group[x]
        console.log(this.group[x]);
      }
    }
    
  }
}
