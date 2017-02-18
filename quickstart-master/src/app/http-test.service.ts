import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Headers }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class HTTPTestService{
constructor (private http:Http){}

getCurrentTime(){
return this.http.get('http://date.jsontest.com')
.map(res => res.json());
}

postJSON(){
var json = JSON.stringify({var1: 'test', var2: 3});
var params = 'json='+json;
var headers = new Headers();

headers.append('Content-Type', 'application/x-www-form-urlencoded');

return this.http.post('http://validate.jsontest.com', params, {
    headers: headers
})
.map(res => res.json());
}

}