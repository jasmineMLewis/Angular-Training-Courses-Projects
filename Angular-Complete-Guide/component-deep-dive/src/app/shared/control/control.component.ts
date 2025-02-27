import {
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, //Disables style scoping for form fields; typically will not need to disable
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  //@HostBinding('class') className = 'contorl';
  //  @HostListener('click') onClick() {
  //   console.log('Clicked!');
  //  }

  label = input.required<string>();
  private el = inject(ElementRef);

  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;

  //Signal Version
  private control = contentChild<ElementRef<HTMLFormElement | HTMLTextAreaElement>>('input');

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    //console.log(this.control);
    console.log(this.control()); //SIGNAL
  }
}
