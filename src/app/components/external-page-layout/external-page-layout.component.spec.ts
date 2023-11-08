import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalPageLayoutComponent } from './external-page-layout.component';

describe('ExternalPageLayoutComponent', () => {
  let component: ExternalPageLayoutComponent;
  let fixture: ComponentFixture<ExternalPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalPageLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExternalPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
