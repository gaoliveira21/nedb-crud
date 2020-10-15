import User, { IUser } from '../models/User';
import Database from '../../database';

interface Condition {
  _id?: string;
  name?: string,
  email?: string,
  password?: string,
  createdAt?: Date;
  updatedAt?: Date;
}

class UserRepository {
  private database;

  constructor() {
    this.database = Database.createDataStore(User.key);
  }

  create(payload: IUser): Promise<IUser> {
    return new Promise((resolve, reject) => {
      this.database.insert<IUser>(payload, (err, newUser) => {
        if (err) reject(err);

        resolve(newUser);
      })
    })
  }

  find(): Promise<IUser[]> {
    return new Promise((resolve, reject) => {
      this.database.find<IUser[]>({}, (err: Error | null, docs: IUser[]) => {
        if (err) reject(err)

        resolve(docs)
      })
    })
  }

  findOne(condition: Condition): Promise<IUser> {
    return new Promise((resolve, reject) => {
      this.database.findOne(condition, (err, doc: IUser) => {
        if (err) reject(err)

        resolve(doc)
      })
    });
  }

  update(
    condition: Condition,
    payload: { name?: string, email?: string, password?: string }
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      this.database.update(condition, { $set: payload }, {}, (err) => {
        if (err) reject(err)

        resolve()
      })
    })
  }

  destroy(condition: Condition): Promise<void> {
    return new Promise((resolve, reject) => {
      this.database.remove(condition, {}, (err) => {
        if (err) reject(err)

        resolve()
      })
    })
  }
}

export default new UserRepository();
