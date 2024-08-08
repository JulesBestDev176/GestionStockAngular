import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMvtstkArticleComponent } from './details-mvtstk-article.component';

describe('DetailsMvtstkArticleComponent', () => {
  let component: DetailsMvtstkArticleComponent;
  let fixture: ComponentFixture<DetailsMvtstkArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsMvtstkArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsMvtstkArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
