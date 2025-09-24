import { Injectable, signal } from '@angular/core';

export interface User {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = signal<User[]>([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ]);

  getUsers() {
    return this.users.asReadonly();
  }

  addUser(name: string) {
    this.users.update(users => [...users, { id: Date.now(), name }]);
  }

  removeUser(id: number) {
    this.users.update(users => users.filter(user => user.id !== id));
  }
}
