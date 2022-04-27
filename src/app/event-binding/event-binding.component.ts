import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void 
  {
  }
show()
{
  alert("Hurray you clicked");
}
blu()
{
  alert("blur is working");
}
co()
{
  alert("copying");
}

}
