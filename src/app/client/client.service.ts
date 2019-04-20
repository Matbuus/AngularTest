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
  private managerId:any;
  private getAllClientsUrl = 'http://localhost:8080/manager/'+ this.managerId + '/clients';
  private addClientUrl = 'http://localhost:8080/manager/' + this.managerId + '/clients';


  constructor(private http: HttpClient) {
  }

  setManagerId(managerId: String){
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
}
