export interface IUser {
  _id?: string;
  name: string,
  email: string,
  password: string,
  createdAt?: Date;
  updatedAt?: Date;
}

export default class User {
  static get key(): string {
    return 'users';
  }
}
