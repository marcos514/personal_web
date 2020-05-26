import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  scrollTo(id){
    let el = document.getElementById(id);
    console.log(el)
    el.scrollIntoView({
      behavior: 'auto',
      block: 'center',
      inline: 'center'
    });
  }

}
