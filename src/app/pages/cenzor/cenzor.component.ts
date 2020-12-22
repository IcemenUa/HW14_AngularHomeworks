import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.css']
})
export class CenzorComponent implements OnInit {
  badWordsArr: Array<string> = [];
  badWord: string;
  badWordValid = /^[A-Za-z]{3,15}$/;
  isRed: boolean;
  cenzorText: string;
  isEmpty: boolean;





  constructor() { }

  ngOnInit(): void {
  }


  badWordAdd(): void {
    if (this.badWordValid.test(this.badWord) && this.badWord) {
      this.badWordsArr.push(this.badWord);
      this.badWord = '';
      this.isRed = false;
      console.log(this.badWordsArr);
    }
    else {
      this.isRed = true;
    }
  };

  badWordReset(): void {
    console.log('reserWorks');
    this.badWord = '';
    this.badWordsArr = [];
    this.isRed = false;
  };
  cenzor(): void {
    if (this.cenzorText) {
      let cenzorTextArr: Array<string> = this.cenzorText.split(/[\s,.]/)
      console.log(cenzorTextArr);
      cenzorTextArr.forEach((textValue, textIndex) => {
        this.badWordsArr.forEach((value, index) => {
          if (cenzorTextArr[textIndex].toLowerCase() === value.toLowerCase()) {
            cenzorTextArr[textIndex] = '*'.repeat(cenzorTextArr[textIndex].length);
          }
        });
      });
      console.log(cenzorTextArr);
      this.cenzorText = cenzorTextArr.join(' ')
      this.isEmpty = false;
    }
    else {
      this.isEmpty = true;
    }

  }
}
