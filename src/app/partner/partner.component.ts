import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  partnerLogos = [
    {
      img: "assets/img/partner-img/Python.png",
      hoverImg: "assets/img/partner-img/Python.png"
    },
    {
      img: "assets/img/partner-img/Numpy.png",
      hoverImg: "assets/img/partner-img/Numpy.png"
    },
    {
      img: "assets/img/partner-img/keras.png",
      hoverImg: "assets/img/partner-img/keras.png"
    },
    {
      img: "assets/img/partner-img/TensorFlow.png",
      hoverImg: "assets/img/partner-img/TensorFlow.png"
    },
    {
      img: "assets/img/partner-img/Scikit.png",
      hoverImg: "assets/img/partner-img/Scikit.png"
    },
    {
      img: "assets/img/partner-img/Panda.png",
      hoverImg: "assets/img/partner-img/Panda.png"
    },
    {
      img: "assets/img/partner-img/nodejs.png",
      hoverImg: "assets/img/partner-img/nodejs.png"
    },
    {
      img: "assets/img/partner-img/Kubernetes.png",
      hoverImg: "assets/img/partner-img/Kubernetes.png"
    },
    {
      img: "assets/img/partner-img/JIRA.png",
      hoverImg: "assets/img/partner-img/JIRA.png"
    },
    {
      img: "assets/img/partner-img/AWS.png",
      hoverImg: "assets/img/partner-img/AWS.png"
    },
    {
      img: "assets/img/partner-img/GCP.png",
      hoverImg: "assets/img/partner-img/GCP.png"
    },
    {
      img: "assets/img/partner-img/GitHub.png",
      hoverImg: "assets/img/partner-img/GitHub.png"
    }
  ];


}
