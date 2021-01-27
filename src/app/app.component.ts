import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portifolio';
  
  /*innerWidth: any;
  innerWidthStr: string;

  ngOnInit(){
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.innerWidth = window.innerWidth;
    this.innerWidthStr = this.innerWidth+'px';
    console.log(this.innerWidthStr);
    
  }*/

}
