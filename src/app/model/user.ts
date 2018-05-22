import { Adresse } from './adresse';

export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  adresse: Adresse;

  roles: string[];

  constructor() {
    this.adresse = new Adresse();
  }
}
