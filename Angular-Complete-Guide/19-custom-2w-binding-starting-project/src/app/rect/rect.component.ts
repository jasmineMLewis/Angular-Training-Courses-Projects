// import { Component, EventEmitter, Input, Output } from '@angular/core';

// @Component({
//   selector: 'app-rect',
//   standalone: true,
//   imports: [],
//   templateUrl: './rect.component.html',
//   styleUrl: './rect.component.css',
// })
// export class RectComponent {
//  // Custom two-way binding
  
//   //This input and output belong together. It creates two-way
//   //binding. For @Output Decorator, it MUST share the same variable name
//   //as the @Input Decorator connected to the word 'Change' for Angular
//   //to detect
//   // @Input({required: true}) size!: {width: string; height: string};
//   // @Output() sizeChange = new EventEmitter<{width: string; height: string}>();

//   // onReset() {
//   //   //This updates the old input value in the component that created it, 
//   //   //eventually affecting the app component.
//   //   this.sizeChange.emit({
//   //     width: '200',
//   //     height: '100',
//   //   });
//   // }
// }


import { Component, model } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  //Implementing custom two-way binding using Signals in Angular (Updated for Angular 17.2+)

  //You do not have to separate the @Input() and @Output() Decorators
  size = model.required<{ width: string; height: string }>();

  onReset() {
    //Update Signals using the set method
    this.size.set({
      width: '200',
      height: '100',
    });
  }
}

