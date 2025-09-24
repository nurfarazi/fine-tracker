
import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users = signal<User[]>([
    { id: 1, name: 'Nur Farazi' },
    { id: 2, name: 'Hasan Rakib' },
    { id: 3, name: 'Pial Ahamed' },
    { id: 4, name: 'Zakaria bijoy' },
  ]);

  getUsers() {
    return this.users();
  }

  addUser(user: Omit<User, 'id'>) {
    const newUser = { ...user, id: this.users().length + 1 };
    this.users.update(users => [...users, newUser]);
  }

  updateUser(updatedUser: User) {
    this.users.update(users =>
      users.map(user => (user.id === updatedUser.id ? updatedUser : user))
    );
  }

  deleteUser(id: number) {
    this.users.update(users => users.filter(user => user.id !== id));
  }
}
