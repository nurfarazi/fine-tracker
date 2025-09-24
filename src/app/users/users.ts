import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '../user';

@Component({
  selector: 'app-users',
  template: `
    <h2>Users</h2>

    <form (submit)="addUser($event)">
      <input type="text" name="name" placeholder="Enter name" #nameInput>
      <button type="submit">Add User</button>
    </form>

    <ul>
      @for (user of userService.getUsers()(); track user.id) {
        <li>
          {{ user.name }}
          <button (click)="removeUser(user.id)">Remove</button>
        </li>
      }
    </ul>
  `,
  styles: [`
    form {
      margin-bottom: 1rem;
    }
    input {
      margin-right: 0.5rem;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem;
      border-bottom: 1px solid #ccc;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  protected userService = inject(UserService);

  addUser(event: Event) {
    event.preventDefault();
    const input = (event.target as HTMLFormElement).elements.namedItem('name') as HTMLInputElement;
    const name = input.value;
    if (name) {
      this.userService.addUser(name);
      input.value = '';
    }
  }

  removeUser(id: number) {
    this.userService.removeUser(id);
  }
}
