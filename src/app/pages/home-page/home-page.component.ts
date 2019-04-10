import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  imageCards = []
  imgPath = 'assets/images/';
  
  constructor() { }

  ngOnInit() {
    this.fetchImageCards();
  }

  fetchImageCards() {
    this.imageCards = [
      { image: 'america.jpg', topTag: 'SURPRIZE ME', bottomTagline: ' test is fsld  k dsklfjskdl jslflkfjfsdlkfjds lk dlskj sdlkf flksdj lks fjlfjsk  8 Secret Place to Explore in Thailand' },
      { image: 'africa.jpg', topTag: 'BEACH', bottomTagline: ' 6 Secret Place to Explore in Thailand' },
      { image: 'asia.jpg', topTag: 'SURPRIZE ME', bottomTagline: ' 8 Secret Place to Explore in Thailand' },
      { image: 'europe.jpg', topTag: 'SURPRIZE ME', bottomTagline: ' 8 Secret Place to Explore in Thailand' },
    ];
  }

}
