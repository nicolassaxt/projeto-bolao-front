import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolaoListComponent } from './bolao-list.component';

describe('BolaoListComponent', () => {
  let component: BolaoListComponent;
  let fixture: ComponentFixture<BolaoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolaoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
