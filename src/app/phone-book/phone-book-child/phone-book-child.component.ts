import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { IContact } from '../../shared/interfaces/contact.interface';

@Component({
  selector: 'app-phone-book-child',
  templateUrl: './phone-book-child.component.html',
  styleUrls: ['./phone-book-child.component.css']
})
export class PhoneBookChildComponent implements OnInit {

  // decorators
  @Input() phoneArr: Array<IContact>;
  @Input() search: string;
  @Output() changePhoneArr = new EventEmitter<any>();

  // status of edit
  editStatus: boolean;

  // contact change variables
  NewNumber: any;
  NewFirstName: string;
  NewLastName: string;

  // index of the modified element
  elementIndex: number;

  // value for pipe 
  sortBy = ''

  // inputValidation
  nameCheck = /^[A-Za-z]{3,10}$/;
  telCheck = /^[0-9]{10}$/;
  fNameStatus = true;
  sNameStatus = true;
  telStatus = true;


  constructor() { }

  ngOnInit(): void {
    this.sortByFname()
  }

  clearInputs() {
    this.NewNumber = '';
    this.NewFirstName = '';
    this.NewLastName = '';
  };

  inputValidation() {
    this.fNameStatus = this.nameCheck.test(this.NewFirstName);
    this.sNameStatus = this.nameCheck.test(this.NewLastName);
    this.telStatus = this.telCheck.test(this.NewNumber);
  }

  changeParentArr(): void {
    this.changePhoneArr.emit(this.phoneArr)
  }

  deleteNumber(i): void {
    this.phoneArr.splice(i, 1)
    this.changeParentArr()
  }

  editNumber(index, elem): void {
    this.editStatus = !this.editStatus
    this.elementIndex = index

    this.NewNumber = elem.phone;
    this.NewFirstName = elem.firstName;
    this.NewLastName = elem.lastName;
  }

  change(): void {
    if (this.nameCheck.test(this.NewFirstName) && this.telCheck.test(this.NewNumber) && this.nameCheck.test(this.NewLastName)) {
      this.editStatus = false;
      let element = this.phoneArr[this.elementIndex];
      element.phone = this.NewNumber;
      element.firstName = this.NewFirstName;
      element.lastName = this.NewLastName;
      this.changeParentArr()
      this.clearInputs()
    }
    else {
      this.inputValidation()
    }
  };


  sortByFname(): void {
    this.sortBy = 'firstName'
    this.changeParentArr()
  };
  sortBySname(): void {
    this.sortBy = 'secondName'
    this.changeParentArr()
  };
  sortByNumber(): void {
    this.sortBy = 'phone'
    this.changeParentArr()
  };


}
