import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelArticleComponent } from './nouvel-article.component';

describe('NouvelArticleComponent', () => {
  let component: NouvelArticleComponent;
  let fixture: ComponentFixture<NouvelArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouvelArticleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
