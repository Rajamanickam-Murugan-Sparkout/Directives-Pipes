import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { AppendPipe } from './custom.pipe';
import { CustomDirectiveComponent } from './custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    PipesComponent,
    AppendPipe,
    CustomDirectiveComponent
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
