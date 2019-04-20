export class Manager {
  id: string;
  name: string;
  email: string;
  salary: number;

  constructor(id: string, name: string, email: string, salary:number) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.salary = salary;
  }
}
