import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  paneCounter = 0;

  panes = ['first', 'second', 'third', 'fourth', 'fifth'];

  activePane = 'first';

  constructor() { }

  ngOnInit() {
  }

  togglePanes(lesson: string) {
    console.log(lesson);
    if (this.paneCounter !== 1) {
      this.paneCounter++;
    } else {
      this.paneCounter = 0;
    }
    console.log(this.paneCounter);
    this.activePane = this.panes[this.paneCounter];
  }

}
