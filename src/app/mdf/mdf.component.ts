import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.scss']
})
export class MDFComponent implements OnInit {
RegisterForm;
EmpName;
EmpAge;
EmpDepartment;
EmpAddress;
EmpContact;
  
constructor() { }

  ngOnInit(): void {
    this.RegisterForm =new FormGroup({
    EmpName:new FormControl(""),
    EmpAge:new FormControl(""),
    EmpDepartment:new FormControl(""),
    EmpAddress:new FormControl(""),
    EmpContact:new FormControl(""),  
    });    
  }


OnRegisterClick(data)
{
this.EmpName = data.EmpName;
this.EmpAge = data.EmpAge;
this.EmpDepartment = data.EmpDepartment;
this.EmpAddress = data.EmpAddress;
this.EmpContact = data.EmpContact ;
}

}


