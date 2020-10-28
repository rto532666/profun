import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.popup-youtube').magnificPopup({
			disableOn: 320,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
    });
    
    $('.popup-btn').magnificPopup({
          type: 'image',
          gallery:{
              enabled:true
          }
    });
  }

}
