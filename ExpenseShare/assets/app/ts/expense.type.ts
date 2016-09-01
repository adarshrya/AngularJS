
export class ExpenseObj {
    public ID: number;
    public Description:string;
    public Name: string;
    public Ammount: number;
    public Myshare: number;
    public TotalPart: number;
    public NameShare: Array<NamePartObj>;

    constructor(id: number, name: string, ammount: number, myshare: number,description:string) {
        this.ID = id;
        this.Name = name;
        this.Ammount = ammount;
        this.Myshare = myshare;
        this.NameShare=[];
        this.Description=description;
    }

    AddSharing(name: string, myshare: number) {
        this.NameShare.push(new NamePartObj(name, myshare));
    }

    SumTotalPart() {
        this.TotalPart = 0;
        for (let i = 0; i < this.NameShare.length; i++) {
            this.TotalPart += this.NameShare[i].Myshare;
        }
        return this.TotalPart;
    }

}
export class NamePartObj {
    public Name: string;
    public Myshare: number;
    constructor(name: string, myshare: number) {
        this.Name = name;
        this.Myshare = myshare;
    }
}
