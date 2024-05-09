import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { AppendPipe } from './custom.pipe';
import { CustomDirectiveComponent } from './custom.directive';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { ChildComponent } from './lifecycle-hooks/child/child.component';
import { ParentComponent } from './lifecycle-hooks/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    PipesComponent,
    AppendPipe,
    CustomDirectiveComponent,
    LifecycleHooksComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
