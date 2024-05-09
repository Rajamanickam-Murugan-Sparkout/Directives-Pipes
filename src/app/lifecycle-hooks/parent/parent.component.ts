import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component,DoCheck } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit,AfterContentChecked{

  ngDoCheck(){
    console.log("Parent ngDocheck");
  }

  ngAfterViewInit(){
    console.log("Parent ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("Parent ngAfterViewChecked");
  }

  ngAfterContentInit(){
    console.log("Parent ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("Parent ngAfterContentChecked");
  }

}
