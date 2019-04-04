import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lesson-option',
  templateUrl: './lesson-option.component.html',
  styleUrls: ['./lesson-option.component.scss']
})
export class LessonOptionComponent implements OnInit {

  @Input() shortTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
