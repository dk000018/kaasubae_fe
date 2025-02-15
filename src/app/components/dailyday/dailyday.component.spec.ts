import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailydayComponent } from './dailyday.component';

describe('DailydayComponent', () => {
  let component: DailydayComponent;
  let fixture: ComponentFixture<DailydayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailydayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailydayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
