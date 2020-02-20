import { Component, OnInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
@ContentChild('apHeader', { static: false }) headerElem;
  constructor() { }

  ngOnInit(): void {
    console.log(this.headerElem);
  }

}
