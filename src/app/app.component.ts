import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  angular = 'Angular';

  show = false;

  constructor(){

  }

  showFunction(){
    this.show = !this.show
    // this.title = 'Lifecycle-hooks'
  }

}
