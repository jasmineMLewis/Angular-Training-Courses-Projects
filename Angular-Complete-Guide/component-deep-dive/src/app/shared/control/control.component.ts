import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None //Disables style scoping for form fields; typically will not need to disable
})
export class ControlComponent {
 label = input.required<string>();
}