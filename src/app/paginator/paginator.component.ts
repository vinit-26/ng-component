import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
@Input() noOfPages: number;
@Output() pageNoClicked = new EventEmitter<number>();
public pages: number[];
  constructor() { }

  ngOnInit(): void {
    this.pages = new Array(this.noOfPages);
  }
  pageNumberClicked(pageNo) {
    this.pageNoClicked.emit(pageNo);
  }

}
