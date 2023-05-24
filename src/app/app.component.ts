import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  // title = 'Angular Template Driven Forms';
  // loginUser(item:any) {
  //   console.warn(item);
  }

