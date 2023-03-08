import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angulartutorial2';

  firstName="smith"
  lastName ="Zhang"
  employeeFullName=""

  printFullName(data:string)
  {
 this.employeeFullName = data;
  }
}
