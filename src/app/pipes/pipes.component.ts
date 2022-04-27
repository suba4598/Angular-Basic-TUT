import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {


  
  title='concept works';
  todaydate = new Date();  
  months=['Jan', 'Feb', 'Mar', 'Apr', 'May',];

 
  constructor() { }

  ngOnInit(): void {
  }

}
