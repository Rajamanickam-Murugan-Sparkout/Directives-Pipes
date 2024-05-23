import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  angular = 'Angular';

  show = false;

  message: string[]= [];

  constructor(private dataService: DataService){
    this.message = dataService.data;
  }

  showFunction(){
    this.show = !this.show
    // this.title = 'Lifecycle-hooks'
  }

}
