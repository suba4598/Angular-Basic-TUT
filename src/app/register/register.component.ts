import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder} from '@angular/forms';
import{MyserviceService}from '../service/myservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  NewRegisterForm;
  Email;
  MobileNo;
  username;
  password;
  emailPattern;
  IsAdd:boolean=false;
  AddMessage:string;


  IsClicked:boolean=false;
 constructor(private formbuilder: FormBuilder,private myservice:MyserviceService) { }

  
  ngOnInit(): void 
  {
   
    this.NewRegisterForm =new FormGroup
    ({
     
    Email:new FormControl(""),
    MobileNo:new FormControl(""),
    username:new FormControl(""),
    password:new FormControl(""),
 
    })
 
    this.NewRegisterForm=this.formbuilder.group
    
    ({
      Email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      MobileNo:['',[Validators.required,Validators.minLength (10),Validators.maxLength (10)]],
      username: ['',[Validators.required,Validators.minLength (8)]],
      password:['',[Validators.required,Validators.minLength (8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    
    })
  }

  get Check() 
  {
    return this.NewRegisterForm.controls;
  }

  OnRegisterClick(data)
  {
  this.IsClicked = true;
  
  if (this.NewRegisterForm.invalid)
  
  {
  return;
  }
//Insert method
this.myservice.InsertRegister(data).subscribe(
 ()=>{
this.IsAdd = true;
this.AddMessage='Registered Succesfully';
 } 
);



  this.Email=data.Email;
  this.MobileNo=data.MobileNo;
  this.username = data.username;
  this.password = data.password;

  }



}