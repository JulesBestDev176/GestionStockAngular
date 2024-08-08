import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageArticleComponent } from 'src/pages/articles/page-article/page-article.component';

describe('PageArticleComponent', () => {
  let component: PageArticleComponent;
  let fixture: ComponentFixture<PageArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
