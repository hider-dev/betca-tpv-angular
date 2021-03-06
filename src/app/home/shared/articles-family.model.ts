import { ArticleWithProvider } from './article.model';

export interface ArticlesFamily {
  id: string;
  reference: string;
  familyType: string;
  description?: string;  
  article?: ArticleWithProvider;
  articleId?: string;
  articlesFamilyList?: ArticlesFamily[];
  articlesFamilyListId?: string[];
  isTypeArticle?: boolean

}

export interface ArticlesFamilyCreation {
  id: string;
  reference: string;
  familyType: string;
  description?: string;  
  article?: string;
  articlesFamilyListId?: string[];
}
