import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {Client} from '../client/client';
import {ClientService} from '../client/client.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  board: string;
  errorMessage: string;
  sarrouna: Client;
  clients: any = [];
  managerId: number;

  constructor(private clientService: ClientService ) {
    this.clientService.setManagerId(1);
    this.clientService.getAllClients().subscribe(
      data => {console.log(data); this.clients = data as Client []; });
  }

  ngOnInit() {

  }
}
