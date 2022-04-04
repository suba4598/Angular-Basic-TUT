import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit 
{

  RegisterForm;
  username;
  password;

  IsClicked:boolean=false;
 constructor(private formbuilder: FormBuilder) { }

  
  ngOnInit(): void 
  {

    this.RegisterForm =new FormGroup
    ({

    username:new FormControl("hai"),
    password:new FormControl("pass"),
 
    })
 
    this.RegisterForm=this.formbuilder.group
    
    ({

      username: ['',[Validators.required,Validators.minLength (8)]],
      password:['',[Validators.required,Validators.minLength (8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    
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
  
  this.username = data.username;
  this.password = data.password;

  }
  
  }
  
