import {Component, Input, OnInit} from '@angular/core';
import {Client} from '../client/client';
import {ManagerComponent} from '../manager/manager.component';
import {Manager} from '../manager/manager';
import {HrComponent} from '../hr/hr.component';

@Component({
  selector: 'app-manager-add',
  templateUrl: './manager-add.component.html',
  styleUrls: ['./manager-add.component.css']
})
export class ManagerAddComponent implements OnInit {
  form: any = {};
  manager: Manager;
  @Input() hrComponent: HrComponent;
  constructor() { }

  ngOnInit() {
  }

  addManager() {
    this.manager = new Manager(this.form.id, this.form.name, this.form.email, this.form.salary);
    this.hrComponent.addManager(this.manager);
  }


}
