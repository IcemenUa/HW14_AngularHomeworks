import { Component, OnInit } from '@angular/core';
import { IContact } from '../../shared/interfaces/contact.interface';
import { Contact } from '../../shared/models/contact.model';

@Component({
  selector: 'app-phone-book-parent',
  templateUrl: './phone-book-parent.component.html',
  styleUrls: ['./phone-book-parent.component.css']
})
export class PhoneBookParentComponent implements OnInit {

  title = 'phoneBook';
  search: string;
  addStatus: boolean;
  number: any;
  firstName: string;
  lastName: string;
  nameCheck = /^[A-Za-z]{3,10}$/;
  telCheck = /^[0-9]{10}$/;
  fNameStatus = true;
  sNameStatus = true;
  telStatus = true;
  phoneBookArr: Array<IContact> = [
    {
      phone: '0672253571',
      firstName: 'Ivan',
      lastName: 'Ivanov',
    },
    {
      phone: '0672245571',
      firstName: 'Petro',
      lastName: 'Petrov',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }


  clearInputs() {
    this.number = '';
    this.firstName = '';
    this.lastName = '';
    this.fNameStatus = true;
    this.sNameStatus = true;
    this.telStatus = true;
  };
  newPhoneArr(changePhoneArr: Array<IContact>): void {
    this.phoneBookArr = changePhoneArr
  };
  changeAddStatus() {
    this.addStatus = !this.addStatus
  };

  inputValidation() {
    this.fNameStatus = this.nameCheck.test(this.firstName);
    this.sNameStatus = this.nameCheck.test(this.lastName);
    this.telStatus = this.telCheck.test(this.number);
  }
  addPhone() {
    if (this.nameCheck.test(this.firstName) && this.telCheck.test(this.number) && this.nameCheck.test(this.lastName)) {
      let newContact = new Contact(this.number, this.firstName, this.lastName)
      this.phoneBookArr.push(newContact)
      this.changeAddStatus()
      this.clearInputs()
    }
    else {
      this.inputValidation()
    }
  };

  addPhoneCancel() {
    this.changeAddStatus();
    this.clearInputs()
  }


}
