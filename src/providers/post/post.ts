import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PostProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PostProvider {
  data :any;
  constructor(public http: Http) {
    console.log('Hello PostProvider Provider');
  }

  load() {
 

  // don't have the data yet
  return new Promise(resolve => {
    // We're using Angular HTTP provider to request the data,
    // then on the response, it'll map the JSON data to a parsed JS object.
    // Next, we process the data and resolve the promise with the new data.
    this.http.get('http://api.ainakhai.com/public/api/v1/lessons')
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.data = data.data;
        resolve(this.data);
      });
  });
}
  addData(post):any{
    console.log("Add Post "+post);

  	const headers = new Headers({
  		'Content-type' : 'application/json',		
  	});
    this.http.post('http://api.ainakhai.com/public/api/v1/lessons',post)
      .map(res => res.json())
  		.subscribe(data => {
  			console.log(data.message);
  		});
  		return;

  }
  updateData(post,id){
   
   const headers = new Headers({
  		'Content-type' : 'application/json',		
  	});
   this.http.put('http://api.ainakhai.com/public/api/v1/lessons/'+id,post)
    .map(res => res.json())
    .subscribe(data => {
      console.log(data.message)
    });
  }

  deleteData(post){
    console.log("Post ini "+ post)
    const headers = new Headers({
  		'Content-type' : 'application/json',		
  	});
    this.http.delete('http://api.ainakhai.com/public/api/v1/lessons/'+post)
      .map(res => res.json())
  		.subscribe(data => {
  			console.log(data.message);
  		});
  		return true;
  }

}
