import { Component } from '@angular/core';
import { RectComponent } from './rect/rect.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RectComponent, FormsModule],
})
export class AppComponent {
  //Setting the initial width and height of the rectangle.
  rectSize = {
    width: '500',
    height: '100',
  };
}
