import { Component, OnInit, Input, Output, EventEmitter }
  from '@angular/core';

@Component({
  selector: 'app-book-image',
  templateUrl: './book-image.component.html',
  styleUrls: ['./book-image.component.css']
})
export class BookImageComponent implements OnInit {
  @Input() path = "./assets/image/img001.jpg";
  @Input() title = "제목";
  @Input() width = "100";
  @Input() height = "150";

  @Output() selectBook = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClick(name: string) {
    this.selectBook.emit(name);
  }
}
