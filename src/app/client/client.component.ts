import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import {Input} from '@angular/core';
import {ManagerComponent} from '../manager/manager.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  form: any = {};
  client: Client;
  @Input() update = false;
  @Input() clientToChange: Client;
  @Input() managerId: string;
  @Input() managerComponent: ManagerComponent;
  constructor() { }

  traitement() {
    if(!this.update)
      this.addClient();
    else
      this.updateClient();
  }
  ngOnInit() {
  }

  addClient() {
    this.client = new Client(this.form.id, this.form.name, this.form.email, this.form.income.toString(), this.form.score.toString(), '');
    console.log('manager id = ' + this.managerId);
    this.managerComponent.addNewClient(this.client);
  }

  updateClient() {
    this.client = new Client(this.form.id, this.form.name, this.form.email, this.form.income.toString(), this.form.score.toString(), '');
    this.managerComponent.updateClient(this.client.id, this.client);
  }

}
