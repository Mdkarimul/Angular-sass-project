import { Component, OnInit } from '@angular/core';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
import { faCoins} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {
faCoins=faCoins;
  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag:true,
    touchDrag:true,
    pullDrag:true,
    autoHeight:false,
   autoWidth:true,
    navSpeed: 100,
    center:true,
    responsiveRefreshRate:500,
    autoplay:true,
    dragEndSpeed:800,
    margin:50,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items:2
      },
      940: {
        items:3
      }
    },
    nav:false
  }
  

  getData(data:SlidesOutputData){
  console.log(data.slides);
  }

}
