const DataStore = require('nedb');

class Database {
  constructor() {
    this.storages = {};
  }

  createDataStore(key, options = { inMemoryOnly: true, timestampData: true, autoload: true }) {
    this.storages[key] = new DataStore(options);
    return this.storages[key];
  }

  getDataStore(key) {
    return this.storages[key];
  }
}

module.exports = new Database();
