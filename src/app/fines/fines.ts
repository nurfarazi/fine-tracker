import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FineService } from '../fine';
import { UserService } from '../user';
import { RuleService } from '../rule';

@Component({
  selector: 'app-fines',
  template: `
    <h2>Fines</h2>

    <form (submit)="addFine($event)">
      <select name="userId">
        @for (user of userService.getUsers()(); track user.id) {
          <option [value]="user.id">{{ user.name }}</option>
        }
      </select>
      <select name="ruleId">
        @for (rule of ruleService.getRules()(); track rule.id) {
          <option [value]="rule.id">{{ rule.description }}</option>
        }
      </select>
      <button type="submit">Add Fine</button>
    </form>

    <ul>
      @for (fine of fineDetails(); track fine.id) {
        <li>
          <span>{{ fine.userName }} - {{ fine.ruleDescription }} - $ {{ fine.fineAmount }}</span>
        </li>
      }
    </ul>
  `,
  styles: [`
    form {
      margin-bottom: 1rem;
    }
    select {
      margin-right: 0.5rem;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      padding: 0.5rem;
      border-bottom: 1px solid #ccc;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinesComponent {
  protected fineService = inject(FineService);
  protected userService = inject(UserService);
  protected ruleService = inject(RuleService);

  fineDetails = computed(() => this.fineService.getFineDetails());

  addFine(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const userId = +(form.elements.namedItem('userId') as HTMLSelectElement).value;
    const ruleId = +(form.elements.namedItem('ruleId') as HTMLSelectElement).value;

    if (userId && ruleId) {
      this.fineService.addFine(userId, ruleId);
    }
  }
}
