import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Knowledge } from 'src/app/interface/knowledge';

@Component({
  selector: 'app-knowledges',
  templateUrl: './knowledges.component.html',
  styleUrls: ['./knowledges.component.css']
})
export class KnowledgesComponent implements OnInit {
  knowledges:any;
  value = 0;
  show = false;


  constructor(private http_client:HttpService) { }

  ngOnInit(): void {
    this.http_client.GetKnowledges().subscribe(
      knowledges=>{
        this.knowledges = <Knowledge []> knowledges;
        this.knowledges.forEach(element => {
          element.display_child = false
        });

        console.log(this.knowledges)
        // let interval = setInterval(() => {
        //   this.value = this.value + 15;
        //   if (this.value >= 100) {
        //       this.value = 100;
        //       clearInterval(interval);
        //   }
        // }, 5);
      },
      Err=>{
        console.log(Err)
      }
    )


  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }




}
