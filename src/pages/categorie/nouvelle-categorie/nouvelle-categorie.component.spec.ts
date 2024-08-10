import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleCategorieComponent } from './nouvelle-categorie.component';

describe('NouvelleCategorieComponent', () => {
  let component: NouvelleCategorieComponent;
  let fixture: ComponentFixture<NouvelleCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouvelleCategorieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
