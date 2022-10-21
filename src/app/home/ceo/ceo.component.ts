import { Component, HostListener, OnInit } from '@angular/core';
import { faFacebook,faTwitter,faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  
} from '@angular/animations';

@Component({
  selector: 'app-ceo',
  templateUrl: './ceo.component.html',
  styleUrls: ['./ceo.component.scss'],
  animations : [

    trigger('ceo_image',[
      state("hide",style({
           
           width : '0px',
           height: '0px',
           opacity :'0.5',
      })),

      state("show",style({
       
        width : '200px',
        height : '260px',
        opacity :'1'
   })),

   transition("hide=>show",[
     animate("700ms  ease-out"),
   ]),
    ]),
    trigger('description',[
      state("hide",style({
           
           opacity  :'0',
           height : '0px'
      })),
      state("show",style({
        opacity : '1',
        height : '100%'
   })),
   transition("hide=>show",[
     animate("200ms  ease-in"),
   ]),   
    ]),
  ]
})
export class CeoComponent implements OnInit {
  public animate:string = '';
  public ceo_img = "";
  public description = "";
  public faFacebook = faFacebook;
  public faTwitter=faTwitter;
  public faLinkedIn=faLinkedinIn;
  constructor() { }


  ngOnInit(): void {
  }

  @HostListener('window:scroll')
  demo() :void{
    if(window.pageYOffset >80)
    {
      this.ceo_img = "show"; 
      this.description ="show";
    }
    else
    {
      this.ceo_img = "hide";
      this.description ="hide";
    }
  }

}
