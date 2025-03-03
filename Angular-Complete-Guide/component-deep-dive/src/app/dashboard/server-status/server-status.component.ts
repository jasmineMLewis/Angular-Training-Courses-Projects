import {
  AfterViewInit,
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements AfterViewInit, OnInit {
  //instead of assign to offline, set variable as a union, used for dynamic, create in constructor upon instantiation
  //public currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  //Now using a signal function provided by Angular core, manage my state with the help of signals, overwrite the item wrppaed by signal, but one of these 3
  public currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');

  //alternative/updated way to ngOnDestroy
  private destroyRef = inject(DestroyRef);
  //private interval? = ReturnType<typeof setInterval>; way to use with ngOnDestroy

  constructor() {
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
  }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }

  ngOnInit(): void {
    console.log('ON INIT');

    //this.interval = setInterval... Using ngOnDestroy alternative to private destroyRef = inject(DestroyRef);

    //SetInterval is a JavaScript function
    const interval = setInterval(() => {
      const rnd = Math.random(); //0 - 0.9999

    //   //using string with union
    //   if (rnd < 0.5) {
    //     this.currentStatus = 'online';
    //   } else if (rnd < 0.9) {
    //     this.currentStatus = 'offline';
    //   } else {
    //     this.currentStatus = 'unknown';
    //   }
    // }, 5000); //5 seconds, but 5000 milliseconds

      //using signal
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set( 'offline');
      } else {
        this.currentStatus.set( 'unknown');
      }
    }, 5000); //5 seconds, but 5000 milliseconds

    //ensure interval is destroyed to prevent memory leak; an elegant alternative to ngOnDestroy
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
}
