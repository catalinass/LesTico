import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface Key {
  letter: string;
  active: boolean;
  id: number;
  checked: boolean;
  imageURL: string;
}

export interface Letter {
  letter: string;
  imageURL: string;
}

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.scss']
})
export class AlphabetComponent implements OnInit {

  @Output() emitGoBack = new EventEmitter();
  @Output() emitStartQuiz = new EventEmitter();

  /* Arrays containing Alphabet letters */
  alphabet = ['A', 'B', 'C', 'CH', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'LL', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'RR', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  /* Current letter on display */
  currentLetter: Key;

  /* Initialize Keyboard structure (will probably make this an array of arrays later) */
  keyboard = { row1: [], row2: [], row3: [] };

  /* Progress bar value */
  progress = 0;

  /* Progress bar skip value */
  barSkip = 100 / this.alphabet.length;

  /* Progress bar max limit */
  barLimit = this.barSkip * this.alphabet.length;

  /* Amount of letters already seen by user */
  lettersSeen = 0;

  constructor() { }

  ngOnInit() {
    this.generateKeyboard();
  }

  selectKey(key: Key) {
    key.active = true;
    if (this.currentLetter) {
      this.currentLetter.active = false;
    }
    if (!key.checked) {
      key.checked = true;
      this.lettersSeen++;
      // We did it like this because JS math is weird...
      this.progress = this.lettersSeen * (this.barSkip);
    }
    console.log(this.progress);
    this.currentLetter = key;
  }

  generateKeyboard() {
    let key: Key;
    this.alphabet.forEach((letter, index) => {
      key = { letter: letter, active: false, checked: false, id: index, imageURL: this.getImageURL(letter) };
      if (index <= 10) {
        this.keyboard.row1.push(key);
      } else if (index <= 20) {
        this.keyboard.row2.push(key);
      } else {
        this.keyboard.row3.push(key);
      }
    });
    this.selectKey(this.keyboard.row1[0]);
  }

  nextLetter() {
    const nextLetter = this.currentLetter.id + 1;
    if (nextLetter <= 10) {
      this.selectKey(this.keyboard.row1[nextLetter]);
    } else if (nextLetter <= 20) {
      this.selectKey(this.keyboard.row2[nextLetter - 11]);
    } else {
      this.selectKey(this.keyboard.row3[nextLetter - 21]);
    }
  }

  previousLetter() {
    const previousLetter = this.currentLetter.id - 1;
    if (previousLetter <= 10) {
      this.selectKey(this.keyboard.row1[previousLetter]);
    } else if (previousLetter <= 20) {
      this.selectKey(this.keyboard.row2[previousLetter - 11]);
    } else {
      this.selectKey(this.keyboard.row3[previousLetter - 21]);
    }
  }

  startQuiz() {
    this.emitStartQuiz.emit();
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

}
