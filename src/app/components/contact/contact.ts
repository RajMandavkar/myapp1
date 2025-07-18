import { Component } from '@angular/core';
import { ChildComponent } from '../../child-component/child-component';

@Component({
  selector: 'app-contact',
  imports: [ChildComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.css',

})
export class Contact {
  
}
