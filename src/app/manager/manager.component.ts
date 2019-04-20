import {Component, Input, OnInit} from '@angular/core';
import {Client} from '../client/client';
import {ClientService} from '../client/client.service';
import {Manager} from './manager';
import {isUndefined} from 'util';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})

export class ManagerComponent implements OnInit {
  clients: any = [];
  @Input() managerId: string;
  clientToCluster: Client;
  addClient = false;
  isManager: boolean;
  updateClients = new Map<Client, boolean>();


  constructor(private clientService: ClientService ) {
  }

  ngOnInit() {

    if (isUndefined(this.managerId)) {
      this.managerId = '12345678';
    }
    this.clientService.setManagerId(this.managerId);
    this.getAllClients();
    this.clients.push(new Client('srn', 'srn', '3', '4', '33', ''));
    this.clients.push(new Client('srn', 'srn', '3', '4', '33', ''));
    if (localStorage.getItem('role') === 'ROLE_M') {
      this.isManager = true;
    } else { this.isManager = false; }
    this.setAllFalse();

  }

  getAllClients() {
    this.clientService.getAllClients().subscribe(
    data => {console.log(data); this.clients = data as Client []; });
  }

  clusterClient(clientId: string) {
    this.clientService.clusterClient(clientId).subscribe(
      data => {console.log(data); });
    this.getAllClients();
    location.reload();
  }

  addNewClient(client: Client) {
    this.clientService.addClient(client);
    this.clusterClient(client.id);
    this.getAllClients();
    location.reload();
  }

  deleteClient(clientId: string) {
    this.clientService.deleteClient(clientId).subscribe();
    this.getAllClients();
    location.reload();
  }

  updateClient(clientId: string, client: Client) {
    this.clientService.updateClient(clientId, client).subscribe();
    this.getAllClients();
    location.reload();
  }

  updateClts(client: Client) {
    this.updateClients.set(client, true);
    console.log('true');
  }

  hideUpdateClts(client: Client) {
    this.updateClients.set(client, false);
    console.log('false');
  }

  setAllFalse() {
    this.clients.forEach(client => { this.updateClients.set(client, false); });
  }



}
