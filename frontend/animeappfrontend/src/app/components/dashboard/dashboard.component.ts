import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  homeSlider={items:4,dots:false,nav:false,loop:true,autoplay:true, autoplayHoverPause:true}
  homeSlider2={items:3,dots:false,nav:false,loop:true,autoplay:true, autoplayHoverPause:true}
}
