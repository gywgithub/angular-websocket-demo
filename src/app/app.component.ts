import { Component } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  template: `
    <button (click)="sendMessage()">Send Message</button>
  `
})
export class AppComponent {
  receivedMessages: string[] = [];
  constructor(private websocketService: WebsocketService) {}

  ngOnInit(): void {
    this.websocketService.connect();
    this.websocketService.messageReceived.subscribe((message: string) => {
      this.receivedMessages.push(message);
    });
  }

  sendMessage(): void {
    const message = 'Hello, WebSocket!';
    this.websocketService.sendMessage(message);
  }
}
