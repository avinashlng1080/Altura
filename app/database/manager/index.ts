import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

// import migrations from '../migration';
import Account from '../model/account';
import User from '../model/user';
import schema from '../schema';

class DatabaseManager {
  public database?: Database;

  constructor() {}

  init() {
    this.createDatabase();
  }

  private createDatabase() {
    const adapter = new SQLiteAdapter({
      schema,
      // migrations,// (You might want to comment it out for development purposes -- see Migrations documentation)
      dbName: 'Altura',
      // (recommended option, should work flawlessly out of the box on iOS. On Android,
      // additional installation steps have to be taken - disable if you run into issues...)
      jsi: true /* Platform.OS === 'ios' */,
      onSetUpError: error => {
        // Database failed to load -- offer the user to reload the app or log out
        console.error('Database failed to load', error);
      },
    });

    // Then, make a Watermelon database from it!
    const db = new Database({
      adapter,
      modelClasses: [User, Account],
    });

    if (db) {
      this.database = db;
    }
  }
}

if (!__DEV__) {
  // @ts-ignore
  logger.silence();
}

export default new DatabaseManager();
