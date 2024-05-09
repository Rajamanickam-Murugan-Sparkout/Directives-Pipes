import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.css']
})
export class LifecycleHooksComponent implements OnInit, OnDestroy, OnChanges{
  @Input() angular: any;

  constructor(){
    // console.log(this.angular);
  }

  // intervalInstance: any = null;

  ngOnChanges(changes: any): void {
    // console.log('on changes', changes);
  }

  ngOnInit(): void {
    // console.log('Component Initialized!'); 
    // console.log(this.angular);
    
  // this.intervalInstance = setInterval(()=>{
  //     console.log(new Date());
  //   },1000)
  }

  ngOnDestroy(): void {
    // console.log('Component Destroyed!');

    // if (this.intervalInstance) {
    //   clearInterval(this.intervalInstance)
    // }
  }

}
