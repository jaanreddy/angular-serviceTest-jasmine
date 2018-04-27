import { BrowserModule } from '@angular/platform-browser'; 
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';

import { BasicService }  from './basic.service';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule
  ],
  providers: [BasicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
