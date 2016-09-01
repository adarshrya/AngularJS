import {ExpenseObj} from "./expense.type";
export class PersonObj {
    public ID: number;
    public Name: string;
    public Expense: Array<ExpenseObj>;
    constructor(id: number, name: string) {
        this.Name = name;
        this.ID = id;
        this.Expense=[]
    }
    addExpense(E:ExpenseObj)
    {
      this.Expense.push(E);
    }
}
