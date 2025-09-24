
export interface Rule {
  id: number;
  name: string;
  amount: number;
  description: string;
  note: string;
  type: "Positive" | "Negative";
}
