import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.scss']
})
export class ValidatorsComponent implements OnInit 
{

RegisterForm;
  
EmpName;
EmpAge;
EmpDepartment;
EmpAddress;
EmpContact;

IsClicked:boolean=false;
constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void 
  {

    this.RegisterForm =new FormGroup
    ({
   
    EmpName:new FormControl(""),
    EmpAge:new FormControl(""),
    EmpDepartment:new FormControl(""),
    EmpAddress:new FormControl(""),
    EmpContact:new FormControl(""), 

    });    

    this.RegisterForm=this.formbuilder.group
    ({
    
      EmpName:['',Validators.required],
      EmpAge:['',Validators.required],
      EmpDepartment:['',Validators.required],
      EmpAddress:['',Validators.required],
      EmpContact:[null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    })

    
}

get Check() 
{
  return this.RegisterForm.controls;
}



OnRegisterClick(data)
{
this.IsClicked = true;

if (this.RegisterForm.invalid)

{
return;
}

this.EmpName = data.EmpName;
this.EmpAge = data.EmpAge;
this.EmpDepartment = data.EmpDepartment;
this.EmpAddress = data.EmpAddress;
this.EmpContact = data.EmpContact ;
}

}


