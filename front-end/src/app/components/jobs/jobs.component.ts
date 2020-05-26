import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Job } from 'src/app/interface/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.GetJobs().subscribe(jobs =>{
      this.jobs = <Job[]> jobs
      console.log(jobs)
    },
    Err=>{
      console.log(Err)
    })
  }

}
