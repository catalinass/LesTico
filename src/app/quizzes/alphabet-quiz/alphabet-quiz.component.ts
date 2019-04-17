import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Key } from '../../lessons/alphabet/alphabet.component';

@Component({
  selector: 'app-alphabet-quiz',
  templateUrl: './alphabet-quiz.component.html',
  styleUrls: ['./alphabet-quiz.component.scss']
})
export class AlphabetQuizComponent implements OnInit {

  @Output() emitGoBack = new EventEmitter();

  /* Current letter on display */
  currentLetter: Key;

  /* Number of questions in quiz */
  questionCount = 12;

  /* Progress bar value */
  progress = 0;

  /* Progress bar skip value */
  barSkip = 100 / this.questionCount;

  /* Progress bar max limit */
  barLimit = this.barSkip * this.questionCount;

  correctSelected: boolean;

  incorrectSelected: boolean;

  constructor() { }

  ngOnInit() {
    this.currentLetter = { letter: 'A', active: false, checked: false, id: 0, imageURL: this.getImageURL('A') };
  }

  getImageURL(letter: string) {
    if (letter === 'J' || letter === 'Ñ' || letter === 'Z' || letter === 'RR' ) {
      return  '../../../assets/alphabet/seña ' + letter + '.gif';
    } else {
      return  '../../../assets/alphabet/seña ' + letter + '.JPG';
    }
  }

  goBack() {
    // Testing
    this.emitGoBack.emit();
  }

  isCorrect() {
    this.correctSelected = true;
    this.incorrectSelected = false;
  }

  isIncorrect() {
    this.incorrectSelected = true;
    this.correctSelected = false;
  }

}
