import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolaosComponent } from './bolaos.component';

describe('BolaosComponent', () => {
  let component: BolaosComponent;
  let fixture: ComponentFixture<BolaosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolaosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolaosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
