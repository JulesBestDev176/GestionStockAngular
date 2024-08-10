import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelCltFrsComponent } from './nouvel-clt-frs.component';

describe('NouvelCltFrsComponent', () => {
  let component: NouvelCltFrsComponent;
  let fixture: ComponentFixture<NouvelCltFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouvelCltFrsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelCltFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
