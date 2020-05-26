import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Proyect } from 'src/app/interface/proyect';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  proyects: Proyect[];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.GetProyects().subscribe(proyects =>{
      this.proyects = <Proyect []> proyects
      console.log(proyects)
    },
    Err=>{
      console.log(Err)
    })
  }

}
