import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Game } from '../models/Game';
import { Observable } from 'rxjs';
;

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  API_URI:string =  'http://localhost:5000/api'
  constructor(private http:HttpClient) { }
  getGames():Observable<any>{
    return this.http.get(`${this.API_URI}/games`)
  }
  save(game:Game){

  }
}
