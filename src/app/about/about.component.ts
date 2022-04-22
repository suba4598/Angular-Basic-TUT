import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  Reference;

  constructor(private http:HttpClient,
    private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.http.get('https://drive.google.com/file/d/1DPDtLQk_qg-oyCUTPVdgY1fc0M-NSIEA/view?usp=sharing',{responseType:'text'}).subscribe(res=>{
      this.Reference = this.sanitizer.bypassSecurityTrustHtml(res);
    })
  }

}
