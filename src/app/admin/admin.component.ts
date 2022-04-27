import { Component, OnInit } from '@angular/core';
import{MyserviceService}from '../service/myservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  User:any[];
  _id:string[];

  constructor(private myservice:MyserviceService) { }

  ngOnInit(): void {}
//showdata event

    Onshowclick(data)
    {

    return this.myservice.GetRegister().subscribe((data:any[])=>{
      this.User=data;
    });}

  // delete event

    OnDeleteUser(_id:string)
  {
    debugger;
    this.myservice.RemoveUser(_id).subscribe((data:string)=>{
      this.Onshowclick(data);
    });}
    
    
    OnUpdateUser(i){

    }





  }

