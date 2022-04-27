import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
  Level:number=5;
  content:string="Here the content one displays";

  constructor() { }

  ngOnInit(): void {
  }
  DisplayError():string 
  {
var result="{'three':Level==5}"
return result;
  }

}
