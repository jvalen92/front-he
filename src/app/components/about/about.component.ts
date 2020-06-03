import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public tittle : String;
  public subTittle : String;
  public email : String;
  constructor() { 
    this.tittle = "Hermes Express";
    this.subTittle = "Toda tu información turistica en el mismo lugar";
    this.email = "";

    console.log(localStorage.getItem('test'));
  }

  ngOnInit(): void {
  }

}
