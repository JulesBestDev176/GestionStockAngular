import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMvtstkComponent } from './details-mvtstk.component';

describe('DetailsMvtstkComponent', () => {
  let component: DetailsMvtstkComponent;
  let fixture: ComponentFixture<DetailsMvtstkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsMvtstkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsMvtstkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
