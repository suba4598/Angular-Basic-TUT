import { Component, OnInit } from '@angular/core';
import{MyserviceService}from '../service/myservice.service';

@Component({
  selector: 'app-service-api',
  templateUrl: './service-api.component.html',
  styleUrls: ['./service-api.component.scss']
})
export class ServiceAPIComponent implements OnInit {
PublicData:IPublicData[]=[];
  DisplayDate=this.myservice.GetTodayDate();
 DummyJson:IPublicData={} as IPublicData;
  constructor(private myservice:MyserviceService) { }

  ngOnInit() {
    debugger;
   this.myservice.GetPublicData().subscribe((data) => {
     debugger;
    this.PublicData.push(data);
   });
   this.DummyJson.name='Subash';
   this.DummyJson.age=23;
   this.DummyJson.count=55;
   this.PublicData.push(this.DummyJson);

  }

}
export class IPublicData
{
  name:string;
  age:number;
  count:number;
}