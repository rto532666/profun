import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    setInterval(() => { this.makeTimer(); }, 1000);
  }

  makeTimer = () => {
    let endTime: any = new Date("January 23, 2020 17:00:00 PDT");			
    let endTimeParse = (Date.parse(endTime)) / 1000;
    let now: any = new Date();
    let nowParse = (Date.parse(now) / 1000);
    let timeLeft = endTimeParse - nowParse;
    let days = Math.floor(timeLeft / 86400); 
    let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    if (hours < 10) { hours = 0 + hours; }
    if (minutes < 10) { minutes = 0 + minutes; }
    if (seconds < 10) { seconds = 0 + seconds; }
    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
  }

}
