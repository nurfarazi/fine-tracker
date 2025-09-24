import { Injectable, signal } from '@angular/core';

export interface Rule {
  id: number;
  description: string;
  fineAmount: number;
}

@Injectable({
  providedIn: 'root'
})
export class RuleService {
  private rules = signal<Rule[]>([
    { id: 1, description: 'No eating in the library', fineAmount: 5 },
    { id: 2, description: 'No talking on the phone', fineAmount: 10 },
  ]);

  getRules() {
    return this.rules.asReadonly();
  }

  addRule(description: string, fineAmount: number) {
    this.rules.update(rules => [...rules, { id: Date.now(), description, fineAmount }]);
  }

  removeRule(id: number) {
    this.rules.update(rules => rules.filter(rule => rule.id !== id));
  }
}
