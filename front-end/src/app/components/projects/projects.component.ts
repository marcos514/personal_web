import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Project } from 'src/app/interface/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  statuses = [] //TODO
  loading = true
  selected_project:Project;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.GetProjects().subscribe(projects =>{
      this.projects = <Project []> projects
      this.loading = false;
      console.log(projects)
    },
    Err=>{
      console.log(Err)
    });
    
    this.statuses = [
      {'label':'Started', 'value': 'Started'},
      {'label':'Stoped', 'value': 'Stoped'},
      {'label':'Finished', 'value': 'Finished'},
      {'label':'Blocked', 'value': 'Blocked'},
      {'label':'Future', 'value': 'Future'}
    ]

  }

  selectProject(project: Project) {
    if(this.selected_project != project){
      this.selected_project = project;
      let el = document.getElementById('project_description');
      el.scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
      });
    }
    else{
      this.selected_project = null;
    }
  }

  getColor(i){
    if (i % 2 == 0){
      i = 'odd';
    }
    else{
      i = 'even';
    }
    switch (i) {
      case i = 'even' : return 'rgb(34, 34, 34)';
      case i = 'odd' : return 'rgb(47, 47, 47)';
    }
  }

}
