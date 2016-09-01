export class Report{
  
   public name:string;
   public sharing:number;
   public expense:number;
   public OwesTo: Array<NamePartObj>;
   constructor(name:string){
     this.name=name;
     this.sharing=0;
     this.expense=0;
     this.OwesTo=[]
   }

   AddOwesTo(name:string,amount:number)
   {
     this.OwesTo.push(new NamePartObj(name,amount));
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