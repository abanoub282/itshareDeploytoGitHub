import { componentFactoryName, debugOutputAstAsTypeScript, TemplateBinding } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../app/services/posts.service';
import { Observable } from 'rxjs/Rx'
import { data } from 'jquery';
import 'rxjs/operator/map';
import { HttpClient } from '@angular/common/http'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { PostCallBack } from './services/post-callBack';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit , OnDestroy {

  ngOnDestroy(): void {
    /// remove
  }
  // posts : any = [];
  // constructor(private service:PostsService , callBack: PostCallBack) {

  //   this.service.getPosts(callBack.getCallBack);
  //   this.posts = callBack.posts;
  //   this.posts = JSON.parse(localStorage.getItem('DBPosts'));

  // }

  // url: string = 'https://jsonplaceholder.typicode.com/posts';

  ngOnInit(): void {
     
  }

  // createPost(input: HTMLInputElement) {

  //   let post = {title : input.value , id : ''}

  //     this.service.create(post)
  //     .subscribe( response=> {
  //       this.posts.splice(0, 0, post);
  //     })

  // }

    // updatePost(post, inputTitle){

    //   let updatepost = {title : inputTitle , id : post.id};
    //   this.service.update(updatepost)
    //   .subscribe(Response=>{
    //     // update current view
    //     let index = this.posts.indexOf(post);
    //     this.posts[index] = updatepost;
    //   })

    // }

  // posts: any [];
  // currentId: number;
  // firstName = "my name";
  // userData = {
  //   firstName: '',
  //   lastName: ''


  // item = {
  //   title: 'New TV',
  //   price: 2199.99,
  //   sold: 4531,
  //   rating: 4.7655,
  //   date: new Date()
  // };

  // postDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque justo, ultricies quis aliquet quis, bibendum ullamcorper justo. Aenean est mauris, tincidunt quis tristique a, lacinia vitae nisi. Nullam in odio luctus, ultricies enim at, blandit massa. Integer finibus consequat ante, vitae eleifend eros congue nec. Donec hendrerit ex sit amet orci finibus pellentesque. Etiam purus purus, placerat et tellus eu, vehicula luctus est. Nam ultrices vel lectus et aliquet. Morbi eget lorem eget turpis rutrum condimentum. Donec at justo urna. Suspendisse ac tempus mauris. Fusce et sem nisi. Sed pharetra euismod lacus eu facilisis. Mauris ultricies porta dapibus. Nulla laoreet est eu diam bibendum viverra. Fusce tincidunt risus enim, ut imperdiet ex commodo at.'

  // selectedCountry = "egypt";
  // constructor(){
  // }

  // countryChanged(country) {
  //   console.log("selected country is: ", country)
  // }

  // title = "ITShare";

  // isActive = false;

  // methodName() {
  //   alert("Welcome To Event Binding");
  //   console.log("Event Fired");
  // }

  // divClicked() {
  //   console.log("Div Fired");
  // }

  // btnClicked($event) {
  //   $event.stopPropagation();
  //   console.log("Button Fired");
  // }

  // nameval = 'ITShare';

  // onkeyup(firstname){
  // this.nameval = firstname;
  // this.nameval = firstname;
  // console.log(this.nameval);
  // }
  // onkeyup($event) {

  // if($event.keyCode === 13) {
  // console.log("Enter was Presssed");
  // console.log( $event.target.value );
  // }

  // this.nameval = $event.target.value;
  // }

  // onkeyup(firstName){
  //   console.log(firstName);
  // }

  // PIPE

  // employees ={
  //   fullName : "Ahmed Rabea",
  //   rating : 5.97 ,
  //   salary : 5000,
  //   hiringDate : new Date(2015,5,1)
  // }

  // title= "Looking to quickly add Bootstrap to your project?";

  // favState = true;

  // favChanged(){
  //   console.log(this.favState);
  // }

  //   persons : string [] = ['ahmed', 'mohamed', 'ali', 'bassem'];

  // peopleByCountry : any[] = [
  // {
  //   'country' : 'Egypt',
  //   'names' : 
  //   [
  //     {name : 'ITShare'},
  //     {name : 'Training - Mansoura'}
  //   ]
  // },
  // {
  //   country : 'Turkey',
  //   names : [
  //     { name : 'ahmed rabes'},
  //     { name : 'mohamed rabea'},
  //     { name : 'mostafa'}
  //   ]
  // }
  // ];

  // courses : string [] = 
  // [
  //   'Java',
  //   'Python',
  //   'web3',
  //   'Blockchain'
  // ];

  // courses = [
  //   {'id' : 1, 'courseName' : 'java'},
  //   {'id' : 2, 'courseName' : 'Python'},
  //   {'id' : 3, 'courseName' : 'web3'},
  //   {'id' : 4, 'courseName' : 'Blockchain'}
  // ];

  //   trackByCourse(index , course) {
  //     return course ? course.id : undefined;
  //   }
  // onAdd() {
  //   this.courses.push({'id' : 5, 'courseName' : 'Angular'});
  // }

  // onRemove(course) {
  //   let index= this.courses.indexOf(course);
  //   this.courses.splice(index,1);

  // }

  // defaultView= 'Courses';

  // setView(selectedView){
  //   this.defaultView = selectedView;
  // }

  // whatColor= false;

  // obs = Observable
  // .interval(1000)
  // .take(3)
  // .map( (d) => Date.now).subscribe( a => {
  //   // console.log(a);
  //   // if ( a< 10) {
  //     console.log(a);
  //   // }
  // })



}


// constructor(postsService: PostsService){
//   postsService.getPosts().subscribe(res => {
//     console.log(res);
//     this.posts = res;
//   }, err => {
//     console.log(err);
//   })
// }

// handleClick(event) {
//   console.log('the button was clicked', event);
// }

// divClicked() {
//   console.log('the div was clicked');
// }

// handleInput(event) {
//     console.log("enter was pressed");
//   }

// handleInput(e) {
//   console.log(e.target.value);
// }

// handleInput(value) {
//   console.log(value);
// }

// handleInput() {
//   console.log(this.firstName);
// }

// activatePost(id) {
//   console.log(id)
//   this.currentId = id;
// }

// }

/*

* reusable component
* input and input aliasing
* outputs, rasing event and outputs aliasing
* handling output events
* templating
* styles and shadow dom

*/


