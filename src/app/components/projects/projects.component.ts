import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/proyecto'
import {ProjectService} from '../../services/project.service'
import {global} from '../../services/global.conf'
import {User} from '../../models/user'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  public users : User[];
  public user_0 : User;
  public user_1 : User;
  public user_2 : User;
  constructor(
    private _projectService : ProjectService
  ) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      response =>{
        this.users=response
        console.log("holi");

        let i = 0
        let showUsers = [];
        while (i<8) {
          showUsers[i] = this.users[i];
          i=i+1;
        }
        

        //get users by cluster
        while(true){
          if (this.users[i].cluster == "0") {
            this.user_0 = this.users[i];
            this.user_0.nombre = "Ricardo";
            i=0;
            break;
          }
          i = i+1;
        }

        while(true){
          if (this.users[i].cluster == "1") {
            this.user_1 = this.users[i];
            this.user_1.nombre = "Santiago";
            i=0;
            break;
          }
          i = i+1;
        }

        while(true){
          if (this.users[i].cluster == "2") {
            this.user_2 = this.users[i];
            this.user_2.nombre = "Sebastian";
            i=0;
            break;
          }
          i = i+1;
        }

        console.log("holis",this.user_0, this.user_1, this.user_2);
        let aux = []
        aux[0] = this.user_0;
        aux[1] = this.user_1;
        aux[2] = this.user_2;

        this.users = aux
        console.log(this.users);

        //localStorage.setItem('user',);
        
        
        
        
    },error=>{
      console.log(<any>error);
      
    })
  }

  onRecomend(user){
    console.log(user);
    let userToJson = JSON.stringify(user);
    localStorage.setItem('user',userToJson);
    
  }

}
