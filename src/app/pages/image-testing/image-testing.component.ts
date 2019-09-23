import { Component, OnInit } from '@angular/core';

declare var dataLayer:any;
@Component({
  selector: 'app-image-testing',
  templateUrl: './image-testing.component.html',
  styleUrls: ['./image-testing.component.scss']
})
export class ImageTestingComponent implements OnInit {

  items = [];
  images = ['africa.jpg', 'america.jpg', 'asia.jpg', 'first.png', 'europe.jpg', 'second.png', 'third.png', 'five.png'];
  constructor() { }

  ngOnInit() {
    dataLayer.push({
      event:'pageLoad',
      page:'image-testing'
    });
    this.items = this.getRandomItems(6);
  }

  test1(sets: Array<number>) {
    for (let s of sets) {
      let item = this.items[s];
      item.src = item.src;
      item.src = this.images[s];
    }
  }


  getRandomItems(len) {
    let data = [];
    for (let i = 0; i <= len; i++) {
      let r = Math.floor(Math.random() * len + 1 + 1);
      let img = this.images[r];
      data.push({
        title: " title " + r,
        src: img,
        price: r * 100,
      });
    }
    return data;
  }

}
