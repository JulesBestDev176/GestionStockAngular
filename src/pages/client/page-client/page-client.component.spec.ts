import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClientComponent } from 'src/pages/client/page-client/page-client.component';

describe('PageClientComponent', () => {
  let component: PageClientComponent;
  let fixture: ComponentFixture<PageClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
