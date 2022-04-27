import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
month=["Jan","Feb","mar","April","May","june","july","Aug","sep","oct","nov","Dec"];
isavailable=true;
  

Emp=[{"Name":"subash","Email":"subash@gmail.com","Mobile":"8825477045"},
     {"Name":"sathish","Email":"sathish@gmail.com","Mobile":"7322114455"},
     {"Name":"Baskar","Email":"Baskar@gmail.com","Mobile":"9966332211"}

]

}
