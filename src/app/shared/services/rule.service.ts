
import { Injectable, signal } from '@angular/core';
import { Rule } from '../models/rule.model';

@Injectable({
  providedIn: 'root',
})
export class RuleService {
  private rules = signal<Rule[]>([
    { id: 1, name: 'Scrum miss (Home)', amount: 200, description: 'Late join or miss the scrum. If someone fails to notify about location within the given period by fund trustee, it will be considered as working from home.', note: 'Fixed', type: 'Negative' },
    { id: 2, name: 'Failed to notify about scrum miss', amount: 100, description: 'fund trustee responsible to log all the fine, if someone miss the scrum and did not notify the fund trustee', note: 'Fixed', type: 'Negative' },
  ]);

  getRules() {
    return this.rules();
  }

  addRule(rule: Omit<Rule, 'id'>) {
    const newRule = { ...rule, id: this.rules().length + 1 };
    this.rules.update(rules => [...rules, newRule]);
  }

  updateRule(updatedRule: Rule) {
    this.rules.update(rules =>
      rules.map(rule => (rule.id === updatedRule.id ? updatedRule : rule))
    );
  }

  deleteRule(id: number) {
    this.rules.update(rules => rules.filter(rule => rule.id !== id));
  }
}
