import { AfterViewInit, Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from './../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';


@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
 //@ViewChild('form') private form?: ElementRef<HTMLFormElement>; templatevariable
 // private form = viewChild<ElementRef<HTMLFormElement>>('form'); SIGNAL
 private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  public onSubmit(title:string, ticketText: string) {
    console.log(title);
    console.log(ticketText);

    //this.form?.nativeElement.reset(); Using @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
    ////Using  private form = viewChild<ElementRef<HTMLFormElement>>('form');
    //this.form()?.nativeElement.reset(); 

    //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
    this.form().nativeElement.reset(); 

  }
}
