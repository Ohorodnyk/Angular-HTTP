import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http'

import { AppComponent }  from './app.component';
import {HTTPTestComponent} from './http-test.cpmponent'
import {HTTPTestService} from './http-test.service'

@NgModule({
  imports:      [ 
    BrowserModule, 
    HttpModule ],
  declarations: [ 
    AppComponent, 
    HTTPTestComponent ],
  providers : [HTTPTestService],
  bootstrap:    [ AppComponent]
  
})
export class AppModule { }
