import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Manager} from './manager';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private getAllManagersUrl =  'http://localhost:8080/manager/managers';
  private addManagerUrl =  'http://localhost:8080/manager/';
  private deleteManagerUrl: string;
  private updateManagerUrl: string;
  private hrId: string;


  constructor(private http: HttpClient) {
  }

  setHrId(hrId: string){
    this.hrId = hrId;
  }

  addManager(manager: Manager) {
    return this.http.post(this.addManagerUrl, manager , httpOptions).subscribe();
  }

  getAllManagers(): Observable<Manager[]> {
    return this.http.get<Manager[]>(this.getAllManagersUrl, httpOptions);
  }


  deleteManager(managerId: string){
    this.deleteManagerUrl = 'http://localhost:8080/manager/' + managerId ;
    return this.http.delete(this.deleteManagerUrl, httpOptions);
  }

  updateManager(managerId: string, manager: Manager){
    this.updateManagerUrl = 'http://localhost:8080/manager/' + managerId ;
    return this.http.put(this.updateManagerUrl, manager, httpOptions);
  }
}
