import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Services } from '../../services'; // Make sure this service is implemented correctly

@Component({
  selector: 'app-login',
  standalone: true, // <-- This is needed if using `imports` in a component
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'] // <-- typo fixed: should be `styleUrls` not `styleUrl`
})
export class Login implements OnInit {

  // Inject dependencies
  private http = inject(HttpClient);
  private service = inject(Services);

  // Properties
  loginData: any = {
    userName: "",
    email: "",
    pass: "",
  };

  users: any[] = [];

  onclick() {
    this.http.post("http://localhost:3000/users", this.loginData).subscribe((res: any) => {
      console.log('User added:', res);
    });
  }

  ngOnInit() {
    this.service.getData().subscribe((data: any) => {
      this.users = data;
      console.log('Users loaded:', data);
    });
  }
}
