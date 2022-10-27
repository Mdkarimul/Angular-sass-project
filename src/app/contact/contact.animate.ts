import { keyframes, trigger } from "@angular/animations";
import { state } from "@angular/animations";
import { animate } from "@angular/animations";
import { style } from "@angular/animations";
import { transition } from "@angular/animations";


//start header component animations
export const heroContentOne =  trigger('heroheader',[
    state('down',style({
     
    })),
    state('up',style({
     
    })),
    transition("down <=> up",[
    animate('0.8s ease',keyframes([
        style({
            position:'relative',
            top:'60px',
            opacity:'0.5'
        }),
        style({
            position:'relative',
            top:'0px',
            opacity:'1'
        })
    ])),
])
])

export const heroContentTwo = trigger('herodesc',[
    state('down',style({
  
    })),
    state('up',style({
   
    })),
    transition("down <=> up",[
    animate('1s 0.5s',keyframes([
        style({
            position:'relative',
            top:'60px',
            backgroundColor:'transparent',
            opacity:'0.5',
            offset:0.1

        }),
        style({
            position:'relative',
            top:'30px',
            opacity:'0.7',
            backgroundColor:'transparent',
            offset:0.2
        }),
        style({
            position:'relative',
            top:'0px',
            opacity:'1',
            backgroundColor:'transparent',
            offset:1
        })
    ])),
])
])
//end header component animation


export const fade_submenu = trigger('fade',[
    state('hide',style({
        top:'50px',
        opacity:'0',
    })),
    state('show',style({
        top:'55px',
        opacity:'1',
    })),
    transition('hide <=> show',[
        animate('0.4s ease')
    ])
])
