import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // constructor(private http: HttpClient) { }

  // getPosts(): Observable<any> {
  //   return this.http.get('https://jsonplaceholder.typicode.com/posts');
  // }

  url: string = 'https://jsonplaceholder.typicode.com/posts';
  private posts: any = [];

  constructor(private http: HttpClient) { }

  getPosts(callBack) {
    return this.http.get(this.url).subscribe(response=>{
      callBack(response);
    })
  }

  get() {
    return this.http.get(this.url);
  }

  create(post) {


    return this.http.post(this.url, JSON.stringify(post));
     

  }

  update(post, inputTitle) {

    return this.http.put(this.url + '/' + post.id, JSON.stringify(post))

  }

  delete(post){

     return this.http.delete(this.url + '/' + post.id);
  }
}
