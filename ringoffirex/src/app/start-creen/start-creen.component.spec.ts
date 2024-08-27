import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCreenComponent } from './start-creen.component';

describe('StartCreenComponent', () => {
  let component: StartCreenComponent;
  let fixture: ComponentFixture<StartCreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartCreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartCreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
