import { User } from './user.model';
import { Rule } from './rule.model';

export interface Fine {
  id: number;
  userId: number;
  ruleId: number;
  date: string;
  status: 'Paid' | 'Unpaid';
  note?: string;
}
