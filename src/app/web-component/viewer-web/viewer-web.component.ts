import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  templateUrl: './viewer-web.component.html',
  styleUrls: ['./viewer-web.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewerWebComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
