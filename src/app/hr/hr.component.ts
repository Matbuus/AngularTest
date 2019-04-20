import { Component, OnInit } from '@angular/core';
import {Client} from '../client/client';
import {ClientService} from '../client/client.service';
import {Manager} from '../manager/manager';
import {ManagerService} from '../manager/manager.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {
  managers: any = [];
  hrId: string;
  managerAdd = false;
  showClients = new Map<Manager, boolean>();

  constructor(private managerService: ManagerService ) {
    this.getAllManagers();
    this.managers.push(new Manager('srn', 'srn', '3', 4));
    this.setAllFalse();
    localStorage.setItem('role', 'ROLE_HR');
  }

  ngOnInit() {

  }

  getAllManagers() {
    this.managerService.getAllManagers().subscribe(
      data => {console.log(data); this.managers = data as Manager []; });
  }

  addManager(manager: Manager) {
    this.managerService.addManager(manager);
    this.getAllManagers();
    location.reload();
  }

  deleteManager(managerId: string) {
    this.managerService.deleteManager(managerId);
    this.getAllManagers();
    location.reload();
  }

  showClts(manager: Manager) {
    this.showClients.set(manager, true);
  }

  hideClts(manager: Manager) {
    this.showClients.set(manager, false);
  }

  setAllFalse() {
    this.managers.forEach(manager => { this.showClients.set(manager, false); });
  }
}
