import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RuleService } from '../rule';

@Component({
  selector: 'app-rules',
  template: `
    <h2>Rules</h2>

    <form (submit)="addRule($event)">
      <input type="text" name="description" placeholder="Enter description">
      <input type="number" name="fineAmount" placeholder="Enter fine amount">
      <button type="submit">Add Rule</button>
    </form>

    <ul>
      @for (rule of ruleService.getRules()(); track rule.id) {
        <li>
          <span>{{ rule.description }} - $ {{ rule.fineAmount }}</span>
          <button (click)="removeRule(rule.id)">Remove</button>
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
export class RulesComponent {
  protected ruleService = inject(RuleService);

  addRule(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const descriptionInput = form.elements.namedItem('description') as HTMLInputElement;
    const fineAmountInput = form.elements.namedItem('fineAmount') as HTMLInputElement;

    const description = descriptionInput.value;
    const fineAmount = parseFloat(fineAmountInput.value);

    if (description && !isNaN(fineAmount)) {
      this.ruleService.addRule(description, fineAmount);
      form.reset();
    }
  }

  removeRule(id: number) {
    this.ruleService.removeRule(id);
  }
}
