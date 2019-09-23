import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handleFileDrop($event) {
    $event.preventDefault();
  }

  handleDragLeave($event) {
    $event.preventDefault();
  }

  handleDragOver($event) {
    $event.preventDefault();
  }

  handleFileSelection($event) {
      
  }

}
