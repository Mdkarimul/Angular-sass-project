import { animation } from '@angular/animations';
import { Component, OnInit,ElementRef } from '@angular/core';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {
 //only fot item
 public one:any = {
  color : "teal",
  background :"white",
  width :"100%",
  padding:'20px 10px',
  textAlign:'center',
  borderTopLeftRadius :'10px',
  borderBottomLeftRadius :'10px',
  cursor :'pointer',
};
public two:any = '';
public three:any = '';
public four:any = '';
public item_line_active:any = {backgroundColor:'white',width:'6px',height:'80px',position:'absolute',top:'0px',borderRadius:'5px',transition:'all 0.5s'};  


  constructor(private el:ElementRef) { }

  ngOnInit(): void {
  }

  design(el:any):any
  {
    let name = el.className;
    switch(name)
    {
       case "case-one" :  this.one = {
        color : "teal",
        background :"white",
        width :"100%",
        padding:'20px 10px',
        textAlign:'center',
        borderRadius:'10px',
        cursor :'pointer',
       };
       this.two = '';
       this.three ='';
       this.four = '';
       this.item_line_active = {backgroundColor:'white',width:'6px',height:'80px',position:'absolute',top:'0px',borderRadius:'5px',transition:'all 0.5s'};
       break;


       case "case-two" 
       :
       this.four ='';
        this.one = '';
        this.three=''; 
        this.two = {
        color : "teal",
        background :"white",
        width :"100%",
        padding:'20px 10px',
        textAlign:'center',
        borderRadius:'10px',
        cursor :'pointer',
       };
       this.item_line_active = {backgroundColor:'white',width:'6px',height:'80px',position:'absolute',top:'100px',borderRadius:'5px',transition:'all 0.5s'};   
       break;


       case "case-three" : 
       this.four ='';
        this.two ='';
         this.one=''; 
         this.three = {
        color : "teal",
        background :"white",
        width :"100%",
        padding:'20px 10px',
        textAlign:'center',
        borderRadius:'10px',
        cursor :'pointer'
       };
       this.item_line_active = {backgroundColor:'white',width:'6px',height:'80px',position:'absolute',top:'220px',borderRadius:'5px',transition:'all 0.5s'};  
       break;


       case "case-four" : 
       this.one ='';
       this.two='';
       this.three='';
       this.four = {
        color : "teal",
        background :"white",
        width :"100%",
        padding:'20px 10px',
        textAlign:'center',
        borderRadius:'10px',
        cursor :'pointer'
       }
       this.item_line_active = {backgroundColor:'white',width:'6px',height:'80px',position:'absolute',bottom:'0px',borderRadius:'5px',transition:'all 0.5s'}; 
       break; 
    }
  }

}
