import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lesson-option',
  templateUrl: './lesson-option.component.html',
  styleUrls: ['./lesson-option.component.scss']
})
export class LessonOptionComponent implements OnInit {

  @Input() shortTitle: string;
  @Output() emitOpenLesson = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  openLesson() {
    this.emitOpenLesson.emit(this.shortTitle);
  }

}
