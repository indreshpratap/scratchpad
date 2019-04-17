import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

declare var Quill:any;

@Component({
  selector: 'quill-md',
  templateUrl: './quill-md.component.html',
  styleUrls: ['./quill-md.component.scss']
})
export class QuillMdComponent implements OnInit,AfterViewInit {

  _quillInstance;
  @ViewChild("editor") editor:ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._quillInstance = new Quill(this.editor.nativeElement, {
      theme: 'snow',
      // All you need to do to enable the module is to add a modules key
      // to your quill configuration, and add markdownShortcuts with an
      // empty object.
      // There are currently no options to set.
      modules: {
        markdownShortcuts: {}
      }
    });
  }

}
