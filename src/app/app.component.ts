import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tablelist';

  headers = ['ID', 'Name', 'Age', 'Gender', 'Country'];

  rows = [
    {
      ID : '1',
      Name : 'Birane',
      Age : '22',
      Gender : 'Male',
      Country : 'Senegal'
    },
    {
      ID : '2',
      Name : 'Jean',
      Age : '18',
      Gender : 'Male',
      Country : 'France'
    },
    {
      ID : '3',
      Name : 'Louis',
      Age : '18',
      Gender : 'Male',
      Country : 'USA'
    }

  ];
}
