import { Component, OnInit } from '@angular/core';

type CellType = 'content' | 'image' | 'bookbtn_share' | 'read_more';

interface RowOptions {
  noOfCells: number,
  types: CellType[]
}

interface EditorCell {
  type: CellType,
  content?: string,
  imageUrl?: string
}

interface EditorRow {
  cells: Array<EditorCell>
}

const Options = {
  "1 Image": { noOfCells: 1, types: ['image'] },
  "2 Images": { noOfCells: 2, types: ['image', 'image'] },
  "1 Image x 1 Content": { noOfCells: 2, types: ['image', 'content'] },
  "1 Content x 1 Image": { noOfCells: 2, types: ['content','image'] },
  "1 Content": { noOfCells: 1, types: ['content'] },
  "2 Contents": { noOfCells: 2, types: ['content','content'] },
  "Book button with share": { noOfCells: 1, types: ['bookbtn_share'] },
  "Read more": { noOfCells: 1, types: ['read_more'] },
}


@Component({
  selector: 'app-page-designer',
  templateUrl: './page-designer.component.html',
  styleUrls: ['./page-designer.component.scss']
})
export class PageDesignerComponent implements OnInit {

  editorRows: Array<EditorRow> = [];
  options = Object.keys(Options);
  constructor() { }

  ngOnInit() {
  }

  addRow(optKey) {
    let option: RowOptions = Options[optKey];
    let cells: Array<EditorCell> = [];
    for (let i = 0; i < option.noOfCells; i++) {
      cells.push({ type: option.types[i] });
    }

    this.editorRows.push({ cells });
  }

  removeRow(indx) {
    this.editorRows.splice(indx,1);
  }

}
