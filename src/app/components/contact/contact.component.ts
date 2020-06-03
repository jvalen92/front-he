import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Alojamiento } from '../../models/alojamiento';
import { Museo } from '../../models/museo'
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ProjectService]
})
export class ContactComponent implements OnInit {
  public museos: Museo[];
  public museo_0 : Museo;
  public museo_1 : Museo;
  public museo_2 : Museo;
  public museo_3 : Museo;

  public hoteles : Alojamiento[];
  public hotel_0 : Alojamiento;
  public hotel_1 : Alojamiento;
  public hotel_2 : Alojamiento;
  public hotel_3 : Alojamiento;
  public hotel_4 : Alojamiento;

  public localUser : User;



  constructor(
    private _projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.getMuseos();
    this.getHotel();
    this.getUser();
  }

  getMuseos() {
    this._projectService.getMuseos().subscribe(
      response => {
        this.museos = response
        console.log(this.museos);

        //get museos by cluster
        let showMuseos = []
        let i = 0;
        while(true){
          if(this.museos[i].cluster == "0"){
              this.museo_0 = this.museos[i];
              i=0;
              break;
          }

          i = i+1;
        }

        while(true){
          if(this.museos[i].cluster == "1"){
              this.museo_1 = this.museos[i];
              i=0;
              break;
          }

          i = i+1;
        }

        while(true){
          if(this.museos[i].cluster == "2"){
              this.museo_2 = this.museos[i];
              i=0;
              break;
          }

          i = i+1;
        }

        while(true){
          if(this.museos[i].cluster == "3"){
              this.museo_3 = this.museos[i];
              i=0;
              break;
          }

          i = i+1;
        }

        showMuseos[0] = this.museo_0;
        showMuseos[1] = this.museo_1;
        showMuseos[2] = this.museo_2;
        showMuseos[3] = this.museo_3;

        //console.log(showMuseos);

        this.museos = showMuseos;
        console.log(this.museos[0]);
        
        
      }
    ),
      error => {
        console.log(<any>error);

      }
  }

  getHotel(){
    this._projectService.getHotel().subscribe(
      response =>{
        this.hoteles = response;
        //console.log(this.hoteles);

        let showHoteles = [];
        let i = 0;

        while(true){
          if (this.hoteles[i].cluster == '0') {
            this.hotel_0 = this.hoteles[i];
            i=0;
            break;
          }
          i=i+1;
        }

        while(true){
          if (this.hoteles[i].cluster == '1') {
            this.hotel_1 = this.hoteles[i];
            i=0;
            break;
          }
          i=i+1;
        }

        while(true){
          if (this.hoteles[i].cluster == '2') {
            this.hotel_2 = this.hoteles[i];
            i=0;
            break;
          }
          i=i+1;
        }

        while(true){
          if (this.hoteles[i].cluster == '3') {
            this.hotel_3 = this.hoteles[i];
            i=0;
            break;
          }
          i=i+1;
        }

        showHoteles[0] = this.hotel_0;
        showHoteles[1] = this.hotel_1;
        showHoteles[2] = this.hotel_2;
        showHoteles[3] = this.hotel_3;

        //console.log(showHoteles);
        this.hoteles = showHoteles;
      },
      error =>{
        console.log(<any>error);
        
      }
    );
  }

  onComprar(){
    alert("Producto adquirido")
  }

  getUser(){
    this.localUser = JSON.parse(localStorage.getItem('user'))
    console.log("Vengo desde usuarios ",this.localUser);
  }

}
