import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataService } from '../blog-data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  // @ViewChild('tile') blogPostTileComponent: BlogPostTileComponent;
  @ViewChildren('tile') blogPostTileComponent: QueryList<BlogPostTileComponent>;
  public blogPost: BlogPost[][];
  public currPage: number;

  constructor(private blogData: BlogDataService) { }

  ngOnInit(): void {
    this.currPage = 0;
    this.blogPost = this.blogData.getData();
  }

  updatePage(newPage): void {
    console.log(newPage);
    this.currPage = newPage;
  }

  expandAll() {
    this.blogPostTileComponent.forEach(element => {
      element.clickText();
    });
  }
  fevAll() {
    this.blogPost[this.currPage] =
    this.blogPost[this.currPage]
    .map(post => ({
        title: post.title,
        summary: post.summary,
        isFev: !post.isFev
    }));
  }
}
