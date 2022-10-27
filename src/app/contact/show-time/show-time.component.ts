import { Component, OnInit } from '@angular/core';
import {faLocationDot,faPhoneVolume,faAt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.scss']
})
export class ShowTimeComponent implements OnInit {
faLocation=faLocationDot;
faPhoneVolume=faPhoneVolume;
faAt = faAt;
  constructor() { }

  ngOnInit(): void {
  }

}
