import { Component, ElementRef, OnInit,AfterViewInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { sticky } from "../../animations";
import { faBars,faL,faPhoneVolume,faArrowRight,faCaretUp,faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { fade_submenu,heroContentOne,heroContentTwo } from '../contact.animate';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations : [sticky,fade_submenu,heroContentOne,heroContentTwo],
})
export class HeaderComponent implements OnInit,AfterViewInit{
  control_animate:boolean =true;
  faPhoneVolume=faPhoneVolume;
  faBars=faBars;
  /*control dropdown menu (servive)*/ 
  faArrowRight=faArrowRight;
  public caret_service=faCaretUp;
  public caret_rotate_service:undefined;
  public show_menu_service = {'display':'none'}
  public fade_service =true;
  public overflow_service = {'overflow':'hidden'}
   /*control dropdown menu (about)*/ 
   public caret_about=faCaretUp;
   public caret_rotate_about:undefined;
   public show_menu_about = {'display':'none'}
   public fade_about =true;
   public overflow_about = {'overflow':'hidden'}
     /*control dropdown menu (about)*/ 
     public caret_gen=faCaretUp;
     public caret_rotate_gen:undefined;
     public show_menu_gen = {'display':'none'}
     public fade_gen =true;
     public overflow_gen = {'overflow':'hidden'}
  //nav bar sticky coding
  public sticky:string = 'start';

//mobile nav coding
  public mobile_control:boolean = true;
  public mobile_control_sub_services:boolean = true;
  public services_icon:boolean = true;
  public mobile_control_sub_about:boolean = true;
  public about_icon:boolean = true;
  public mobile_control_sub_next_gen:boolean = true;
  public next_gen_icon:boolean = true;

  //logo icon
  public logo_icon:string  = 'display:none;margin-right:4px;';
  public call_mobile:string | undefined;

 
 @HostListener('window:scroll')
 demo() :void{
   if(window.pageYOffset >60)
   {
   this.sticky = "end";
   this.logo_icon = 'display:block;margin-right:4px;';
   this.call_mobile = 'display:none';

   }
   else
   {
   this.sticky = "start";
   this.logo_icon = 'display:none;margin-right:4px;';
   this.call_mobile='display:block';
   }
 }


 public slides:any[] = [
  {
    url:'../../../assets/portfolio/portfolio-slider-img-1.png',
    id:1,
    alt:'image1',
    title:'site-img-1'
  },
  {
    url:'../../../assets/portfolio/portfolio-slider-img-2.png',
    id:1,
    alt:'image1',
    title:'site-img-1'
  },
  {
    url:'../../../assets/portfolio/portfolio-slider-img-3.png',
    id:2,
    alt:'image3',
    title:'site-img-3'
  },
  {
    url:'../../../assets/portfolio/portfolio-slider-img-4.png',
    id:3,
    alt:'image1',
    title:'site-img-4'
  }
  ];

 customOptions: OwlOptions = {
  loop: true,
  mouseDrag:true,
  touchDrag:true,
  pullDrag:true,
  navSpeed: 100,
  responsiveRefreshRate:500,
  autoplay:true,
  dots:true,
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
private offset:()=>[number,number]= ()=>[0,0];

  constructor() { 
   

  }
  ngOnInit(): void {
   
  }

 ngAfterViewInit(): void {
  this.control_animate = false;
 }

 /* control dropdown menu here*/
ctrl_caret_service(){
  if(this.caret_rotate_service==180)
  {
    this.overflow_service = {'overflow':'visible'}
    this.fade_service = false;
    this.show_menu_service = {'display':'block'}
    // this.caret_rotate_service =0;
  }
  else{
    this.overflow_service = {'overflow':'hidden'}
    this.fade_service = true;
    this.show_menu_service = {'display':'none'}
    // this.caret_rotate_service =180;
  }
}

ctrl_caret_about(){
  if(this.caret_rotate_about===180)
  {
    this.overflow_about = {'overflow':'visible'}
    this.fade_about = false;
    this.show_menu_about = {'display':'block'}
    // this.caret_rotate_about =0;
  }
  else{
    this.overflow_about = {'overflow':'hidden'}
    this.fade_about = true;
    this.show_menu_about = {'display':'none'}
    // this.caret_rotate_about =180;
  }
}

ctrl_caret_gen(){
  if(this.caret_rotate_gen===180)
  {
    this.overflow_gen = {'overflow':'visible'}
    this.fade_gen = false;
    this.show_menu_gen = {'display':'block'}
    // this.caret_rotate_gen =0;
  }
  else{
    this.overflow_gen = {'overflow':'hidden'}
    this.fade_gen = true;
    this.show_menu_gen = {'display':'none'}
    // this.caret_rotate_gen =180;
  }
}

  show():void
  {
   this.mobile_control = !this.mobile_control;
  }
  show_submenu_services(){
    if(!this.mobile_control_sub_about)
    {
      this.mobile_control_sub_about = !this.mobile_control_sub_about;
      this.about_icon = !this.about_icon;
    }else if(!this.mobile_control_sub_next_gen)
    {
      this.mobile_control_sub_next_gen =!this.mobile_control_sub_next_gen;
      this.next_gen_icon = !this.next_gen_icon;
    }
    this.mobile_control_sub_services = !this.mobile_control_sub_services;
    this.services_icon = !this.services_icon;
  }

  show_submenu_about(){
    if(!this.mobile_control_sub_next_gen)
    {
    this.mobile_control_sub_next_gen = !this.mobile_control_sub_next_gen;
    this.next_gen_icon = !this.next_gen_icon;
    }else if(!this.mobile_control_sub_services)
    {
      this.mobile_control_sub_services =!this.mobile_control_sub_services;
      this.services_icon = !this.services_icon;
    }
    this.mobile_control_sub_about = !this.mobile_control_sub_about;
    this.about_icon = !this.about_icon;
  }

  show_submenu_next_gen(){
    if(!this.mobile_control_sub_about)
    {
    this.mobile_control_sub_about = !this.mobile_control_sub_about;
    this.about_icon = !this.about_icon;
    }else if(!this.mobile_control_sub_services)
    {
      alert("fg");
      this.mobile_control_sub_services =!this.mobile_control_sub_services;
      this.services_icon = !this.services_icon;
    }
    this.mobile_control_sub_next_gen = !this.mobile_control_sub_next_gen;
    this.next_gen_icon = !this.next_gen_icon;
  }


  

  
  

}
