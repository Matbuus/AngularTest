import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAddComponent } from './manager-add.component';

describe('ManagerAddComponent', () => {
  let component: ManagerAddComponent;
  let fixture: ComponentFixture<ManagerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
