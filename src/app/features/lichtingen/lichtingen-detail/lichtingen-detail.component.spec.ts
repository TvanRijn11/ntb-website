import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LichtingenDetailComponent } from './lichtingen-detail.component';

describe('LichtingenDetailComponent', () => {
  let component: LichtingenDetailComponent;
  let fixture: ComponentFixture<LichtingenDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LichtingenDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LichtingenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
