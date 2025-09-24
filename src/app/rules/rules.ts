import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RuleService } from '../rule';

@Component({
  selector: 'app-rules',
  template: `
    <h2>Rules</h2>

    <form (submit)="addRule($event)" class="mb-3">
      <div class="input-group">
        <input type="text" class="form-control" name="description" placeholder="Enter description">
        <input type="number" class="form-control" name="fineAmount" placeholder="Enter fine amount">
        <button class="btn btn-primary" type="submit">Add Rule</button>
      </div>
    </form>

    <ul class="list-group">
      @for (rule of ruleService.getRules()(); track rule.id) {
        <li class="list-group-item d-flex justify-content-between align-items-center">
          {{ rule.description }} - $ {{ rule.fineAmount }}
          <button class="btn btn-danger btn-sm" (click)="removeRule(rule.id)">Remove</button>
        </li>
      }
    </ul>
  `,
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
