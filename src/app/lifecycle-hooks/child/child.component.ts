import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements DoCheck,AfterViewInit,AfterViewChecked,AfterContentInit,AfterContentChecked{

  ngDoCheck(){
    console.log("Child ngDocheck");
  }

  ngAfterViewInit(){
    console.log("child ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("child ngAfterViewChecked");
  }

  ngAfterContentInit(){
    console.log("child ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("child ngAfterContentChecked");
  }


}
