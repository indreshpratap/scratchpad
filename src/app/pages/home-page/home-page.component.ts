import { Component, OnInit } from '@angular/core';
import SimpleCrypto from "simple-crypto-js";

declare var dataLayer:any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  imageCards = []
  imgPath = 'assets/images/';
  plain:string='plan';
  encrypted:string;
  
  constructor() { }

  ngOnInit() {
    dataLayer.push({
      event:'pageLoad',
      page:'home'
    })
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

  simpleCrypto = new SimpleCrypto("some-unique-key");
  encrypt(){
    
   
     
    var plainText = this.plain;
    console.log("TCL: HomePageComponent -> encrypt -> plainText", plainText);
    
    console.log("Encryption process...");
    var cipherText = this.simpleCrypto.encrypt(plainText);
    console.log("Plain Text    : " + plainText);
    console.log("Cipher Text   : " + cipherText);
    this.encrypted = cipherText;
  }

  decrypt() {
   
    console.log("... and then decryption...");
    var decipherText = this.simpleCrypto.decrypt(this.encrypted);
    console.log("Decipher Text : " + decipherText);
    console.log("... done.");
    this.plain = decipherText as string;
  }

}
