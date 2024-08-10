import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonActionAnnulerComponent } from './bouton-action-annuler.component';

describe('BoutonActionAnnulerComponent', () => {
  let component: BoutonActionAnnulerComponent;
  let fixture: ComponentFixture<BoutonActionAnnulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutonActionAnnulerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonActionAnnulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
