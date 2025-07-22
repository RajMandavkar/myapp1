import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Services } from '../../services';


@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginData: any =
    {
      "userName": "",
      "email": "",
      "pass": "",
    };



  // constructor(public http: HttpClient) {}

  // http = inject(HttpClient);

  http = inject(HttpClient);
  private service = inject(Services);

  onclick() {
    this.http.post("http://localhost:3000/users", this.loginData).subscribe((res: any) => void {
      // console.log(res);
    })
  };



}
