import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrantjesComponent } from './krantjes.component';

describe('KrantjesComponent', () => {
  let component: KrantjesComponent;
  let fixture: ComponentFixture<KrantjesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KrantjesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KrantjesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
