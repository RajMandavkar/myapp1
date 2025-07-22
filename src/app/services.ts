import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class Services {
  http =inject(HttpClient)
  url= "localhost:3000/users";

  getData(){
    this.http.get(this.url);
  }
  
  
}