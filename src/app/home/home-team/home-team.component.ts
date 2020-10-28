import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-team-home',
    templateUrl: './home-team.component.html',
    styleUrls: ['./home-team.component.css']
})
export class HomeTeamComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    customOptions: OwlOptions = {
        loop: true,
        nav: false,
        dots: true,
        autoplay: false,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        responsive: {
            0:{
                items:1,
            },
            576:{
                items:2,
            },
            768:{
                items:2,
            },
            1200:{
                items:4,
                    },
            1500:{
                items:5,
            }
        }
    }

}
