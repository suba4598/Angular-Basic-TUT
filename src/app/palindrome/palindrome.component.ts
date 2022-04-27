import { Component, OnInit } from '@angular/core';






@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.scss']
})
export class PalindromeComponent implements OnInit {

  constructor() { }

  ngOnInit()  {
  }

  username;
  OnLoginClick(data) {
    debugger;
    this.username = data.Username;
    if (data.Username != '') {
      var split = this.SplitTheString(data.Username);
      var reverse = this.reverseTheString(split);
      var join = this.joinTheString(reverse);
      alert(join == data.Username);
      alert("Is That a Palindrome ?   " +""+this.getpalin(data.Username));
    }
  }
  SplitTheString(name: string): string[] {
    return name.split('');
  }
  reverseTheString = (name: string[]): string[] => {
    return name.reverse();
  };
  joinTheString = (name: string[]): string => {
    return name.join('');
  };
  getpalin = (name: string): boolean => {
    return name.split('').reverse().join('') === this.username;
  }
}