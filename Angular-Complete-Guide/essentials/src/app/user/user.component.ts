import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

// interface User {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //Input Decorator
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  //Output Decorator
  @Output() select = new EventEmitter<string>();

  //selectedUser = signal(DUMMY_USERS[randomIndex]);
  //Signal indicates when a change occur, then set it
  //Signal are trackable data containers; signals are used in state management

  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)
  // avatar = input.required<string>(); 
  // name = input.required<string>(); 

  //Computed Function
//  imagePath = computed(() => {
//   return 'assets/users/' + this.avatar;
//  });

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    this.select.emit(this.user.id);
  }
}
