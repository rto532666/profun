import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.css']
})
export class ServicesDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // FAQ Accordion
    $(function() {
      $('.accordion').find('.accordion-title').on('click', function(){
          // Adds Active Class
          $(this).toggleClass('active');
          // Expand or Collapse This Panel
          $(this).next().slideToggle('fast');
          // Hide The Other Panels
          $('.accordion-content').not($(this).next()).slideUp('fast');
          // Removes Active Class From Other Titles
          $('.accordion-title').not($(this)).removeClass('active');		
      });
    });
  }

}
