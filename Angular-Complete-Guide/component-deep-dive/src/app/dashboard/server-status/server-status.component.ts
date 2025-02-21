import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  //instead of assign to offline, set variable as a union, used for dynamic, create in constructor upon instantiation
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline'; 

  constructor() {
    //SetInterval is a JavaScript function
    setInterval(() => {
      const rnd = Math.random(); //0 - 0.9999

      if(rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
       this.currentStatus = 'unknown';
      }
    }, 5000); //5 seconds, but 5000 milliseconds
  }
}
