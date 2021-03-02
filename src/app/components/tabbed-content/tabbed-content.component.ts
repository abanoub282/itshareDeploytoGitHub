import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tabbed-content',
  templateUrl: './tabbed-content.component.html',
  styleUrls: ['./tabbed-content.component.css']
})
export class TabbedContentComponent implements OnInit {
 activeLink = "";
  constructor() { }

  ngOnInit() {
  }

}
