import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Client} from './client';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private managerId: string;
  private getAllClientsUrl: string;
  private addClientUrl: string;
  private clusterClientUrl: string;
  private deleteClientUrl: string;
  private updateClientUrl: string;


  constructor(private http: HttpClient) {
  }

  setManagerId(managerId: string){
    this.managerId = managerId;
    this.getAllClientsUrl =  'http://localhost:8080/manager/' + this.managerId + '/clients';
    this.addClientUrl  = 'http://localhost:8080/manager/' + this.managerId + '/clients';

  }

  addClient(client: Client) {
    return this.http.post(this.addClientUrl, client , httpOptions).subscribe();
  }

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.getAllClientsUrl, httpOptions);
  }

  clusterClient(clientId: string){
    this.clusterClientUrl = 'http://localhost:8080/client/' + clientId + '/api';
    return this.http.put<number>(this.clusterClientUrl, httpOptions);
  }

  deleteClient(clientId: string){
    this.deleteClientUrl = 'http://localhost:8080/manager/' + this.managerId + '/clients/' + clientId;
    return this.http.delete(this.deleteClientUrl, httpOptions);
  }

  updateClient(clientId: string, client: Client){
    this.updateClientUrl = 'http://localhost:8080/manager/' + this.managerId + '/clients/' + clientId;
    return this.http.put(this.updateClientUrl, client, httpOptions);
  }
}
