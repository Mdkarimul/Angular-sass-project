import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-client-message',
  templateUrl: './client-message.component.html',
  styleUrls: ['./client-message.component.scss']
})
export class ClientMessageComponent implements OnInit {
 
public slides:any[] = [
  {
    url:'../../../assets/site-img-1.jpg',
    id:1,
    alt:'image1',
    title:'site-img-1'
  },
  {
    url:'../../../assets/site-img-3.jpg',
    id:2,
    alt:'image3',
    title:'site-img-3'
  },
  {
    url:'../../../assets/site-img-4.jpg',
    id:3,
    alt:'image1',
    title:'site-img-4'
  }
  ];
  constructor() {console.log(this.slides[0]['id']); }

  ngOnInit(): void {
  }



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag:true,
    touchDrag:true,
    pullDrag:true,
    autoHeight:false,
    navSpeed: 100,
    responsiveRefreshRate:500,
    autoplay:true,
    dragEndSpeed:800,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav:false
  }



}
