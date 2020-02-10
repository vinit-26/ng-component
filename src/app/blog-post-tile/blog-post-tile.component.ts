import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class BlogPostTileComponent implements OnInit {

  @Input() public post: BlogPost;
  private fullText: string;
  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit(): void {
    this.fullText = this.post.summary;
    this.post.summary = this.truncatePipe.transform(this.post.summary);
  }
  clickText(): void {
    this.post.summary = this.fullText;
  }

  markFav() {
    this.post.isFev = !this.post.isFev;
  }

}
