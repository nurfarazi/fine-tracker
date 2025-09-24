import { Injectable, inject, signal } from '@angular/core';
import { UserService, User } from './user';
import { RuleService, Rule } from './rule';

export interface Fine {
  id: number;
  userId: number;
  ruleId: number;
}

@Injectable({
  providedIn: 'root'
})
export class FineService {
  private userService = inject(UserService);
  private ruleService = inject(RuleService);

  private fines = signal<Fine[]>([]);

  getFines() {
    return this.fines.asReadonly();
  }

  addFine(userId: number, ruleId: number) {
    this.fines.update(fines => [...fines, { id: Date.now(), userId, ruleId }]);
  }

  getFineDetails() {
    return this.fines().map(fine => {
      const user = this.userService.getUsers()().find(u => u.id === fine.userId);
      const rule = this.ruleService.getRules()().find(r => r.id === fine.ruleId);
      return {
        ...fine,
        userName: user ? user.name : 'Unknown User',
        ruleDescription: rule ? rule.description : 'Unknown Rule',
        fineAmount: rule ? rule.fineAmount : 0,
      };
    });
  }
}
