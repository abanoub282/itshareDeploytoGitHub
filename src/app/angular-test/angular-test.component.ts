import { Component, OnInit } from '@angular/core';
declare  var   $: any;

@Component({
  selector: 'angular-test',
  templateUrl: './angular-test.component.html',
  styleUrls: ['./angular-test.component.css']
})
export class AngularTestComponent implements OnInit {
  name = 'angular';

  constructor() { }

  ngOnInit() {
    // (function ($){
    //   $(document).ready(function(){
    //     console.log("Hello From jQuery!");
    //   });
    // })(jQuery);
  }

onNgInit () {
  $(document).foundation()
}

 }
