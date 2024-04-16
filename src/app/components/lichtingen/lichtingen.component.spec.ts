import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichtingenComponent } from './lichtingen.component';

describe('LichtingenComponent', () => {
  let component: LichtingenComponent;
  let fixture: ComponentFixture<LichtingenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LichtingenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LichtingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
