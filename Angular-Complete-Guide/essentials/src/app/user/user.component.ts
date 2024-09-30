import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;

  //selectedUser = signal(DUMMY_USERS[randomIndex]);
  //Signal indicates when a change occur, then set it
  //Signal are trackable data containers; signals are used in state management

  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
