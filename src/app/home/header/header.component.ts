import { Component, ElementRef, OnInit,AfterViewInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { sticky } from "../../animations";
import { faBars,faPhoneVolume} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations : [sticky],
})
export class HeaderComponent implements OnInit,AfterViewInit {
  faPhoneVolume=faPhoneVolume;
  faBars=faBars;
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



  constructor() { }
  ngOnInit(): void {
  
  }

 ngAfterViewInit(): void {
  
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
