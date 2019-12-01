import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  url; 
  urlT;
  constructor(private domSanitizer: DomSanitizer) {
    this.url="https://www.youtube.com/watch?v=RxPjiodgxeQ";
    this.urlT=this.domSanitizer.bypassSecurityTrustResourceUrl(this.url);
   }
 
  ionViewWillEnter(): void {
    
  }

  ngOnInit() {}

}
