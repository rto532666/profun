import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Go to Top
    $(function(){
      //Scroll event
      $(window).on('scroll', function(){
          var scrolled = $(window).scrollTop();
          if (scrolled > 300) $('.go-top').fadeIn('slow');
          if (scrolled < 300) $('.go-top').fadeOut('slow');
      });  
      //Click event
      $('.go-top').on('click', function() {
          $("html, body").animate({ scrollTop: "0" },  500);
      });
    });
  }

}
