import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from './../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>; //templatevariable
  // private form = viewChild<ElementRef<HTMLFormElement>>('form'); SIGNAL
  //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  //  @Output() add = new EventEmitter<{title: string; text: string}>(); //custom event
  add = output<{title: string; text: string}>(); //output function for custom event


  //Does NOT Gaurantees viewChild Form is implemneted with Decorator, will be undefined
  ngOnInit(): void {
    //console.log('ONINIT');
    //console.log(this.form?.nativeElement);
  }

  //Gaurantees viewChild Form is implemneted with signal
  ngAfterViewInit(): void {
   // console.log('AFTER VIEW INIT');
   // console.log(this.form().nativeElement);
   //console.log(this.form?.nativeElement);
  }

  public onSubmit(title: string, ticketText: string) {
    //console.log(title);
    //console.log(ticketText);

    this.add.emit({title: title, text: ticketText});

    this.form?.nativeElement.reset(); //Using @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
    ////Using  private form = viewChild<ElementRef<HTMLFormElement>>('form');
    //this.form()?.nativeElement.reset();

    //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
    //this.form().nativeElement.reset();
  }
}
