import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.scss']
})
export class RightSideBarComponent implements OnInit {
  two = [1, 1];
  three = [1, 1, 1];
  constructor() { }

  ngOnInit() {
  }

}
