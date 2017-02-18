import { Component } from '@angular/core';
import {HTTPTestService} from './http-test.service'

@Component({
  selector: 'http-test',
  template: `
  <button (click)="onTestGet()">Test Get Request</button>
  <p>Output: {{getData}}</p>
  <button (click)="onTestPost()">Test POST Request</button>
  <p>Output: {{postData}}</p>
  `,
  providers:[HTTPTestService]
})
export class HTTPTestComponent  { 
getData: string;
postData: string;
constructor (private httpService: HTTPTestService){}

onTestGet(){
this.httpService.getCurrentTime()
.subscribe(
data => this.getData =JSON.stringify(data),
error => alert(error),
()=> console.log("Finished"))
}

onTestPost(){
this.httpService.postJSON()
.subscribe(
data => this.postData =JSON.stringify(data),
error => alert(error),
()=> console.log("Finished"))

}
 }
