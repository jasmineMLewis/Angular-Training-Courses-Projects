import {
  AfterViewInit,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements AfterViewInit, OnInit {
  /**
   * Way to organize methods (via Goodgle) and alphabetize
   *   // Lifecycle hooks
   *   // Public methods
   *   / Protected methods (for inheritance, if needed)
   *   // Private methods (internal logic)
   *   // Helper functions
   */

  //instead of assign to offline, set variable as a union, used for dynamic, create in constructor upon instantiation
  public currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  //alternative/updated way to ngOnDestroy
  private destroyRef = inject(DestroyRef);
  //private interval? = ReturnType<typeof setInterval>; way to use with ngOnDestroy

  constructor() {}

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

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000); //5 seconds, but 5000 milliseconds

    //ensure interval is destroyed to prevent memory leak; an elegant alternative to ngOnDestroy
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
}
