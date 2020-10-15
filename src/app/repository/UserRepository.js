const User = require('../models/User');
const Database = require('../../database')

class UserRepository {
  constructor() {
    this.database = Database.createDataStore(User.key);
  }

  create(payload) {
    return new Promise((resolve, reject) => {
      this.database.insert(payload, (err, newUser) => {
        if (err) reject(err);

        resolve(newUser);
      })
    })
  }

  find() {
    return new Promise((resolve, reject) => {
      this.database.find({}, (err, docs) => {
        if (err) reject(err)

        resolve(docs)
      })
    })
  }

  findOne(condition) {
    return new Promise((resolve, reject) => {
      this.database.findOne(condition, (err, doc) => {
        if(err) reject(err)

        resolve(doc)
      })
    });
  }
}

module.exports = new UserRepository();
