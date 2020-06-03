import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from '../services/global.conf';
import { Project } from '../models/proyecto'

@Injectable()
export class ProjectService {
    public url: string;
    constructor(
        private _http: HttpClient
    ) {
        this.url = global.url;
    }


    testService(): string {
        return "probando servicio";
    }

    getProjects(): Observable<any>{
        let headers = new HttpHeaders().set("Content-Type", 'application/json');
        //return this._http.get(this.url + 'projects', {headers:headers});
        return this._http.get('http://54.197.109.156:3000/getuser', {headers:headers});
    }

    getMuseos(): Observable<any>{
        let headers = new HttpHeaders().set("Content-Type", 'application/json');
        //return this._http.get(this.url + 'projects', {headers:headers});
        return this._http.get('http://54.197.109.156:3000/getmuseo', {headers:headers});
    }

    getHotel(): Observable<any>{
        let headers = new HttpHeaders().set("Content-Type", 'application/json');
        //return this._http.get(this.url + 'projects', {headers:headers});
        return this._http.get('http://54.197.109.156:3000/getalojamiento', {headers:headers});
    }

}
