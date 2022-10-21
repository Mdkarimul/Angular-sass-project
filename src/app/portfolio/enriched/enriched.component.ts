import { Component, OnInit } from '@angular/core';
import { faCirclePlus} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-enriched',
  templateUrl: './enriched.component.html',
  styleUrls: ['./enriched.component.scss']
})
export class EnrichedComponent implements OnInit {
  faCirclePlus=faCirclePlus;
public active:boolean=false;
public c_index:number = 0;
public service_items:any[]=[
  {
    id:1,
    text:"Agriculture and Mining",
    url:"https://www.intlum.com/wp-content/themes/intlum/images/indus-1.png",
    cls:"service-item",
    cls_text:"service_cont",
    cls_img:"service_img"
  },
  {
    id:2,
    text:"Business Services",
    url:"https://www.intlum.com/wp-content/themes/intlum/images/indus-2.png",
    cls:"service-item",
    cls_text:"service_cont",
    cls_img:"service_img"
  },
  {
    id:3,
    text:"Computer And Electronics",
    url:"https://www.intlum.com/wp-content/themes/intlum/images/indus-3.png",
    cls:"service-item",
    cls_text:"service_cont",
    cls_img:"service_img"
  },
  {
    id:4,
    text:"Education",
    url:"https://www.intlum.com/wp-content/themes/intlum/images/indus-4.png",
    cls:"service-item",
    cls_text:"service_cont",
    cls_img:"service_img"
  },
  {
    id:5,
    text:"Financial Services",
    url:"https://www.intlum.com/wp-content/themes/intlum/images/indus-5.png",
    cls:"service-item",
    cls_text:"service_cont",
    cls_img:"service_img"
  },
  {
    id:6,
    text:"Government",
    url:"https://www.intlum.com/wp-content/themes/intlum/images/indus-6.png",
    cls:"service-item",
    cls_text:"service_cont",
    cls_img:"service_img"
  },
  {
    id:7,
    text:"Health",
    url:"https://www.intlum.com/wp-content/themes/intlum/images/indus-7.png",
    cls:"service-item",
    cls_text:"service_cont",
    cls_img:"service_img"
  },
  {
    id:8,
    text:"Media And Entertainment",
    url:"https://www.intlum.com/wp-content/themes/intlum/images/indus-8.png",
    cls:"service-item",
    cls_text:"service_cont",
    cls_img:"service_img"
  },
  {
    id:9,
    text:"Agriculture And Mining",
    url:"https://www.intlum.com/wp-content/themes/intlum/images/indus-1.png",
    cls:"service-item",
    cls_text:"service_cont",
    cls_img:"service_img"
  },
  {
    id:10,
    text:"Business Servives",
    url:"https://www.intlum.com/wp-content/themes/intlum/images/indus-2.png",
    cls:"service-item",
    cls_text:"service_cont",
    cls_img:"service_img"
  },
]; 

public projects:any[] = [
  {
    url:'../../assets/portfolio/bin-eid.jpg'
  },
  {
    url:'../../assets/portfolio/building-plan.jpg'
  },
  {
    url:'../../assets/portfolio/calcutta-bible.jpg'
  },
  {
    url:'../../assets/portfolio/Docton.jpg'
  },
  {
    url:'../../assets/portfolio/golden-hands.jpg'
  },
  {
    url:'../../assets/portfolio/Limonium.jpg'
  },
  {
    url:'../../assets/portfolio/RS-Minerals.jpg'
  },
  {
    url:'../../assets/portfolio/SABU.jpg'
  },
  {
    url:'../../assets/portfolio/saharsi.jpg'
  },
  {
    url:'../../assets/portfolio/Starmark.jpg'
  },
  {
    url:'../../assets/portfolio/portfolio-img-3.jpg'
  },
  {
    url:'../../assets/portfolio/portfolio-img-5.jpg'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

  getActive(i:number){
    this.c_index = i;
  }

}
