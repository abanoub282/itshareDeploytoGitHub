import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
// export class VideoListComponent  {
//   title = "This Is Video List";
//   imgUrl = "https://picsum.photos/id/1/200/300";
//   students: any [];
//   posts: any [];
//   currentId = 3;

//   inputValue = "input value";

// constructor(studentsService: studentServices ) {
//   let studentService = new studentServices();
//   this.students = studentsService.getStudent();
// }

// constructor(postsService: PostsService){
//   postsService.getPosts().subscribe(res => {
//     console.log(res);
//     this.posts = res;
//   }, err => {
//     console.log(err);
//   })
// }

// getTitle() {
//   return this.title;
// }

// }

/*

* ngFor 
* ngIf
* ngSwithCase 
* ngClass
* ngStyle 
* Building a custom directive

*/

export class VideoListComponent {
  // videos = [];

  // showVideo() {
  
  // this.videos = [
  //   { title: "First Video", id: 1},
  //   { title: "Second Video", id: 2},
  //   { title: "Third Video", id: 3},
  //   { title: "Fourth Video", id: 4},
  // ];
  // }

  // removeVideo(index) {
  //   this.videos.splice(index, 1);
  }

  // addVideo() {
  //   this.videos.push({ title: "Fifth Video", id: 5})
  // }

//   trackVideos(index, video) {
//     return video ? video.id : undefined
//   }
// }
