import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {BoutonActionAnnulerComponent} from "../../../composants/bouton-action-annuler/bouton-action-annuler.component";
import {ArticleService} from "../../../services/article/article.service";
import {ArticleDto} from "../../../model/article-dto";
import {CategoryDto} from "../../../model/category-dto";
import {CategoryService} from "../../../services/category/category.service";
import {NgForOf, NgIf} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {catchError, throwError} from "rxjs";
import {PhotoService} from "../../../services/photo/photo.service";
import {SavePhotoParams} from "../../../model/save-photo-params";

@Component({
  selector: 'app-nouvel-article',
  standalone: true,
  imports: [
    RouterLink,
    BoutonActionAnnulerComponent,
    NgForOf,
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './nouvel-article.component.html',
  styleUrl: './nouvel-article.component.css'
})
export class NouvelArticleComponent implements OnInit {
  articleDto: ArticleDto = {};
  categoryDto: CategoryDto = {} as CategoryDto;
  listCategory: Array<CategoryDto> = [];
  errorMsg: Array<string> = [];
  artForm: FormGroup;
  imgUrl: string | ArrayBuffer = 'assets/product.png';
  file: File | null = null;
  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private router: Router,
    private formBuilder: FormBuilder,
    private photoService: PhotoService
  ) {
    this.artForm = this.formBuilder.group({
      codeArt: ['', Validators.required],
      designationArt: ['', Validators.required],
      puhtArt: ['', Validators.required],
      ttvaArt: ['', Validators.required],
      puttcArt: ['', Validators.required],
      cat: ['', Validators.required]
    })
  }
  ngOnInit(): void {
    this.categoryService.findAll()
      .subscribe(categories =>{
        this.listCategory = categories;
      });

    const idArticle = this.activatedRoute.snapshot.params['idArticle'];
    if(idArticle) {
      this.articleService.findArticleById(idArticle)
        .subscribe(article => {
          this.articleDto = article;
          this.categoryDto = this.articleDto.category || {} as CategoryDto;
        })
    }
  }

  saveArticle() {
    const idArticle = this.activatedRoute.snapshot.params['idArticle'];
    if (this.categoryDto) {
      this.articleDto.category = this.categoryDto;
    } else {
      this.errorMsg.push("La catégorie de l'article est manquante.");
      return;
    }
    if(idArticle){
      this.articleService.modifierArticle(idArticle, this.articleDto)
        .pipe(
          catchError(error => {
            this.errorMsg = error.error.errors;
            return throwError(() => new Error(error.message));
          })
        )
        .subscribe({
          next: () => {
            if(this.articleDto.id) {
              this.savePhoto(this.articleDto.id, this.articleDto.codeArticle);
            }
            this.router.navigate(['articles'])
          },
          error: (error) => {
            // Additional error handling if needed
            console.error('Error occurred:', error);
          }
        });
    }else {
      this.errorMsg = [];
      if(this.artForm.invalid) {
        this.artForm.markAllAsTouched();
        Object.keys(this.artForm.controls).forEach(key => {
          const controlErrors = this.artForm.get(key)?.errors;
          if (controlErrors) {
            Object.keys(controlErrors).forEach(errorKey => {
              if (errorKey === 'required') {
                this.errorMsg.push(`Veuillez renseigner le champ ${key} de l'article`);
              }
              // Ajoutez d'autres types d'erreurs si nécessaire
            });
          }
        });
        return;
      }

      this.articleService.enregistrerArticle(this.articleDto)
        .subscribe({
          next: () => {
            if(this.articleDto.id) {
              this.savePhoto(this.articleDto.id, this.articleDto.codeArticle);
            }
            this.router.navigate(['articles'])
          },
          error:err => {
            this.errorMsg = err.error.errors;
          }
        })
    }

  }


  calculerTTC() {
    if (this.articleDto.prixUnitaireHt && this.articleDto.tauxTva) {
      this.articleDto.prixUnitaireTtc = this.articleDto.prixUnitaireHt * (1 + this.articleDto.tauxTva / 100);
    }
  }

  onFileInput(file:FileList | null) {
    if(file) {
      this.file = file.item(0);
      if(this.file) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(this.file);
        fileReader.onload = (event: any) => {
          if(fileReader.result) {
            this.imgUrl = fileReader.result;
          }
        };
      }
    }
  }

  savePhoto(idArticle: string | null, titre?:string) {
    if(idArticle && titre && this.file) {
      const params: SavePhotoParams = {
        id: idArticle,
        file: this.file,
        title: titre,
        context: 'article'
      }
      this.photoService.savePhoto(params)
        .subscribe(res => {
          this.router.navigate(['articles']);
        });
    }else {
      this.router.navigate(['articles']);
    }
  }
}
