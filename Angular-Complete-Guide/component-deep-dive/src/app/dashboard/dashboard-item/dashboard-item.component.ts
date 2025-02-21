import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  // encapsulation: ViewEncapsulation.None,
  // host: {
  //   class: 'dashboard-item',
  // }
})
export class DashboardItemComponent {
  // < Angular 16
  // @Input({required: true}) image!: {
  //   src: string;
  //   alt: string;
  // };
  // @Input({required: true}) title!: string;

  //newwer way to use input function
  image = input.required<{
    src: string;
    alt: string;
  }>();
  title = input.required<string>();
}
