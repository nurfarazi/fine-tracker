
import { Injectable, signal } from '@angular/core';
import { Fine } from '../models/fine.model';

@Injectable({
  providedIn: 'root',
})
export class FineService {
  private fines = signal<Fine[]>([
    { id: 1, userId: 1, ruleId: 1, date: '2024-03-10', status: 'Paid', note: 'Late from home' },
    { id: 2, userId: 2, ruleId: 2, date: '2024-03-11', status: 'Unpaid' },
  ]);

  getFines() {
    return this.fines();
  }

  addFine(fine: Omit<Fine, 'id'>) {
    const newFine = { ...fine, id: this.fines().length + 1 };
    this.fines.update(fines => [...fines, newFine]);
  }

  updateFine(updatedFine: Fine) {
    this.fines.update(fines =>
      fines.map(fine => (fine.id === updatedFine.id ? updatedFine : fine))
    );
  }

  deleteFine(id: number) {
    this.fines.update(fines => fines.filter(fine => fine.id !== id));
  }
}
