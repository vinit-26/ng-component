import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostTileComponent } from './blog-post-tile/blog-post-tile.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { TruncatePipe } from './truncate.pipe';
import { PaginatorComponent } from './paginator/paginator.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostTileComponent,
    BlogListComponent,
    TruncatePipe,
    PaginatorComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TruncatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
