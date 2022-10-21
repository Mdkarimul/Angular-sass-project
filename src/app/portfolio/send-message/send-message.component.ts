import { Component, OnInit } from '@angular/core';
import { faTeamspeak } from '@fortawesome/free-brands-svg-icons';
import { faUser,faStopwatch,faRocket} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {
faStopwatch=faStopwatch;
faUser=faUser;
faRocket=faRocket;
  constructor() { }

  ngOnInit(): void {
  }

}
