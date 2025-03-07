import { Component, input, signal } from '@angular/core';
import { type Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  public data = input.required<Ticket>();
  public detailsVisible = signal(false);

 public onToggleDetails(): void {
    this.detailsVisible.set(!this.detailsVisible());

    //SIGNAL's Update Function, automatcically set to old variable you pass to function
    //this.detailsVisible.update((wasVisible) => !wasVisible);
  }
}
