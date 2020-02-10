import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() { }
  getData() {
    return [
      [
        {
          title: 'Blog 1',
          summary: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
          title: 'Blog 2',
          summary: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
          title: 'Blog 3',
          summary: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
          title: 'Blog 4',
          summary: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        }
      ],
      [
        {
          title: 'Blog 5',
          summary: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
          title: 'Blog 6',
          summary: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
          title: 'Blog 7',
          summary: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
          title: 'Blog 8',
          summary: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
      ],
      [
        {
          title: 'Blog 9',
          summary: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
          title: 'Blog 10',
          summary: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
          title: 'Blog 11',
          summary: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
        {
          title: 'Blog 12',
          summary: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        },
      ]
    ];
  }
}
