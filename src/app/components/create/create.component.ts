import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/proyecto';
import {ProjectService} from '../../services/project.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {

  public title : String;
  public project : Project;

  constructor(
    private _projectService : ProjectService
  ) {
    this.title = " Crear proyecto"
    this.project = new Project();
    console.log(this.project);
    
   }

  ngOnInit(): void {
  }

  onSubmit(form){
    console.log(this.project);
    
  }

}
