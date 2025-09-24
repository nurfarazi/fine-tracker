import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { FineService } from '../fine';
import { UserService } from '../user';
import { RuleService } from '../rule';

@Component({
  selector: 'app-fines',
  template: `
    <h2>Fines</h2>

    <form (submit)="addFine($event)" class="mb-3">
      <div class="input-group">
        <select class="form-select" name="userId">
          @for (user of userService.getUsers()(); track user.id) {
            <option [value]="user.id">{{ user.name }}</option>
          }
        </select>
        <select class="form-select" name="ruleId">
          @for (rule of ruleService.getRules()(); track rule.id) {
            <option [value]="rule.id">{{ rule.description }}</option>
          }
        </select>
        <button class="btn btn-primary" type="submit">Add Fine</button>
      </div>
    </form>

    <ul class="list-group">
      @for (fine of fineDetails(); track fine.id) {
        <li class="list-group-item">
          {{ fine.userName }} - {{ fine.ruleDescription }} - $ {{ fine.fineAmount }}
        </li>
      }
    </ul>
  `,
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
