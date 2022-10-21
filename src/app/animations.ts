import { trigger } from "@angular/animations";
import { state } from "@angular/animations";
import { animate } from "@angular/animations";
import { style } from "@angular/animations";
import { transition } from "@angular/animations";


export const sticky = trigger("navani",[
   state("start",style({
       position :'absolute',
       top: '75px',
       left: '0px',
       width :'100%',
       backgroundColor :'',
       zIndex :'3000',
       paddingBottom: '0px',
       height :'55px',
       display:'flex',
       justifyContent:'space-around',
       alignItems:'center',
       transition:'none',
   })),
   state("end",style({
    position :'fixed',
    top: '0px',
    left: '0px',
    width :"100%",
    backgroundColor:'white',
    zIndex :'3000',
    height :'55px',
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    transition:'none',
    borderBottom:'1px solid #ddd'
})),
transition('start=>end',[
    style({
        top :'-300px'
    }),
    animate('1s'),
]),
]);





