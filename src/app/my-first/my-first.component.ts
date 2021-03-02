import { Component } from '@angular/core';
import { DBServices } from '../db.services';

@Component({
  selector: 'my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.css']
})
export class MyFirstComponent {

// Dependancy Injection

courses;
    constructor(dbservices: DBServices){
      this.courses = dbservices.getAll();
    }
}
