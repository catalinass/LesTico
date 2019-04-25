import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Letter } from '../../lessons/alphabet/alphabet.component';

@Component({
  selector: 'app-alphabet-quiz',
  templateUrl: './alphabet-quiz.component.html',
  styleUrls: ['./alphabet-quiz.component.scss']
})
export class AlphabetQuizComponent implements OnInit {

  @Output() emitGoBack = new EventEmitter();

  /* Current letter on display */
  currentLetter: Letter;

  /* Number of questions in quiz */
  questionCount = 12;

  /* Progress bar value */
  progress = 0;

  /* Progress bar skip value */
  barSkip = 100 / this.questionCount;

  /* Progress bar max limit */
  barLimit = this.barSkip * this.questionCount;

  /* Arrays containing Alphabet letters */
  alphabet = ['A', 'B', 'C', 'CH', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'LL', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'RR', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  correctSelected: boolean;

  incorrectSelected: boolean;

  checkedAnswer: boolean;

  questionAnswer = { letter: 'A', answer: true };

  buttonAction = 'Calificar';

  constructor() { }

  ngOnInit() {
    this.generatePair();
  }

  private getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  generatePair() {
    const isSame = this.getRandomInt(2); // output: 0 or 1
    if (isSame === 1) {
      const letter = this.alphabet[this.getRandomInt(30)];
      this.currentLetter = { letter: letter, imageURL: this.getImageURL(letter) };
      this.questionAnswer = { letter: letter, answer: true };
    } else {
      const letter1 = this.alphabet[this.getRandomInt(30)];
      const letter2 = this.alphabet[this.getRandomInt(30)];
      this.currentLetter = { letter: letter1, imageURL: this.getImageURL(letter2) };
      this.questionAnswer = letter1 === letter2 ? { letter: letter2, answer: true } : { letter: letter2, answer: false };
    }
  }

  getImageURL(letter: string) {
    if (letter === 'J' || letter === 'Ñ' || letter === 'Z' || letter === 'RR' ) {
      return  '../../../assets/alphabet/seña ' + letter + '.gif';
    } else {
      return  '../../../assets/alphabet/seña ' + letter + '.JPG';
    }
  }

  goBack() {
    this.emitGoBack.emit();
  }

  isCorrect() {
    if (this.checkedAnswer === undefined) {
      this.correctSelected = true;
      this.incorrectSelected = false;
    }
  }

  isIncorrect() {
    if (this.checkedAnswer === undefined) {
      this.incorrectSelected = true;
      this.correctSelected = false;
    }
  }

  checkAnswer() {
    const userAnswer = this.correctSelected ? true : false;
    if (userAnswer === this.questionAnswer.answer) {
      this.checkedAnswer = true;
    } else {
      this.checkedAnswer = false;
    }
    this.buttonAction = 'Siguiente';
  }

  nextQuestion() {
    // Reset
    this.incorrectSelected = false;
    this.correctSelected = false;
    this.checkedAnswer = undefined;
    this.buttonAction = 'Calificar';
    // We need to implement later a way to generate pair only from letters we have not yet seen
    this.generatePair();
  }

  handleClick() {
    if (this.checkedAnswer === undefined) {
      this.checkAnswer();
    } else {
      this.nextQuestion();
    }
  }

}
