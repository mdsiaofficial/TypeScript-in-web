export class stu {
  constructor(
    public name: string,
    public id: strOrNum,
    private result: string,
    private age: number,
    readonly address: string,
  ) {}
  book() {
    console.log(`${this.name} got id-${this.id}, lives in ${this.address}`);
  }
}
