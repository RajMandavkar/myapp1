import { Component } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
  inputs:['pDataFirstName','pDataLastName','pDataContact']
  
})
export class ChildComponent {
 pDataFirstName:any;
 pDataLastName: any;
 pDataContact:any;
}

