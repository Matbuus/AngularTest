export class Client {
  id: string;
  name: string;
  email: string;
  income: string;
  score: string;
  cluster: string;

  constructor(id: string, name: string, email: string, income: string, score: string, cluster:string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.income = income;
    this.score = score;
    this.cluster = cluster;
  }
}
