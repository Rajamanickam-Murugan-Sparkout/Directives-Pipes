import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  datas: string[]= [];
  constructor(private service: DataService){
  this.datas = service.data
  }

  datePipe = new Date();
  currencyPipe = 265.268;
  num = 56.52;
  perc = 0.68;
  userName = 'RaJamAnIcKaM MuRuGan'
  obj = {
    name : 'raj',
    age : 24
  }
  value = 5;
  

}
