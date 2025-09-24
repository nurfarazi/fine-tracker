import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { UserService } from '../user';

@Component({
  selector: 'app-users',
  template: `
    <h2>Users</h2>

    <form (submit)="addUser($event)" class="mb-3">
      <div class="input-group">
        <input type="text" class="form-control" name="name" placeholder="Enter name">
        <button class="btn btn-primary" type="submit">Add User</button>
      </div>
    </form>

    <ul class="list-group">
      @for (user of userService.getUsers()(); track user.id) {
        <li class="list-group-item d-flex justify-content-between align-items-center">
          {{ user.name }}
          <button class="btn btn-danger btn-sm" (click)="removeUser(user.id)">Remove</button>
        </li>
      }
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  protected userService = inject(UserService);

  addUser(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const name = nameInput.value;

    if (name) {
      this.userService.addUser(name);
      form.reset();
    }
  }

  removeUser(id: number) {
    this.userService.removeUser(id);
  }
}
