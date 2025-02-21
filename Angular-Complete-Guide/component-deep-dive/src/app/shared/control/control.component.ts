import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, //Disables style scoping for form fields; typically will not need to disable
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
 //@HostBinding('class') className = 'contorl';
//  @HostListener('click') onClick() {
//   console.log('Clicked!');
//  }

 label = input.required<string>();
 private el = inject(ElementRef);
 
 onClick() {
    console.log('Clicked!');
    console.log(this.el);
   }
}