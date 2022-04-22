import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Interface } from 'readline';
import{MyserviceService}from '../service/myservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit 
{


  LoginForm;
  username;
  password;

  IsClicked:boolean=false;
 constructor(private formbuilder: FormBuilder,private myservice:MyserviceService,private router:Router) { }

  
  ngOnInit(): void 
  {

    this.LoginForm =new FormGroup
    ({

    username:new FormControl("hai"),
    password:new FormControl("pass"),
 
    })
 
    this.LoginForm=this.formbuilder.group
    
    ({

      username: ['',[Validators.required,Validators.minLength (8)]],
      password:['',[Validators.required,Validators.minLength (8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    
    })
  }

  get Check() 
  {
    return this.LoginForm.controls;
  }

  OnLoginClick(data)
  
  {
    debugger;
  this.IsClicked = true;
  
  if (this.LoginForm.invalid)
  
  {
  return;
  }
  
  this.username = data.username;
  this.password = data.password;

  let ajson={}as Igetusername;
  ajson=data;
  debugger;
  return this.myservice.Getlogindetailsbyusername(ajson).subscribe((data:any)=>{
  //  this.User=data;
  debugger;
  if(data.message=="userfound")
  {
this.router.navigate(['./nav'])
  }
  else{
    alert("Invalid username or password")
  }
  });

  }

  //showdata event

  

  
  }
  
export interface Igetusername
{
username:string;
password:string;
}