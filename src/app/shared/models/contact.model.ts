import { IContact } from '../interfaces/contact.interface';
export class Contact implements IContact {
    constructor(
       public phone: string,
       public  firstName: string,
       public  lastName: string,
    ){}

}