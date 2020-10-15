import DataStore, { DataStoreOptions } from 'nedb';

interface IStorage {
  [prop: string]: DataStore
}

class Database {
  constructor(private storages: IStorage = {}) {
  }

  createDataStore(
    key: string,
    options: DataStoreOptions = { inMemoryOnly: true, timestampData: true, autoload: true }
  ): DataStore {
    this.storages[key] = new DataStore(options);
    return this.storages[key];
  }

  getDataStore(key: string): DataStore {
    return this.storages[key];
  }
}

export default new Database();
