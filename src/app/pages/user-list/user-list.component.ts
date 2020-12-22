import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  usersArr: Array<UserCreate> = [];
  userLogin: string;
  userPassword: string;
  userEmail: string;
  userIndex: number;
  editStatus: boolean;
  loginValid = /^[A-Za-z]{3,15}$/;
  passwordValid = /^\w{3,15}$/;
  emailValid = /^\w\D+(\.\w\D+)?@(\w+\.\w+|net.ua|org.ua|gmail.com)$/;
  constructor() { }

  ngOnInit(): void {
  }
  addUser(): void {
    if (this.loginValid.test(this.userLogin) && this.passwordValid.test(this.userPassword) && this.emailValid.test(this.userEmail)) {
      const USER = new User(this.userLogin, this.userPassword, this.userEmail);
      this.usersArr.push(USER);
      this.userLogin = '';
      this.userPassword = '';
      this.userEmail = '';

    }

  };
  deleteUser(index: number): void {
    this.usersArr.splice(index, 1);
    console.log(321);

  };
  editUser(user: UserCreate, index: number): void {

    console.log(user);
    this.userLogin = user.login;
    this.userPassword = user.password;
    this.userEmail = user.email;
    this.editStatus = true;
    this.userIndex = index;
  };
  saveUser(): void {
    if (this.loginValid.test(this.userLogin) && this.passwordValid.test(this.userPassword) && this.emailValid.test(this.userEmail)) {
      const USER = new User(this.userLogin, this.userPassword, this.userEmail);
      this.usersArr.splice(this.userIndex, 1, USER)
      this.editStatus = false;
      this.userLogin = '';
      this.userPassword = '';
      this.userEmail = '';
    }

  };
}

interface UserCreate {
  login: string;
  password: string;
  email: string
}
class User implements UserCreate {
  constructor(
    public login: string,
    public password: string,
    public email: string
  ) { }
}