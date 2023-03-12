import UserModel from '../../types/models/user';
import {WDB_TBL_USER} from '../constants/table';
import DatabaseManager from '../database/manager';
export const createUser = async (isLoggedIn: boolean, name?: string) => {
  try {
    const database = DatabaseManager.database;
    let user;
    if (database) {
      await database.write(async () => {
        user = await database.get<UserModel>(WDB_TBL_USER).create(u => {
          u.isLoggedIn = isLoggedIn;
          u.name = name ?? u.name;
        });
      });
    }
    return user;
  } catch (e) {
    console.error('An error occurred while creating a user', e);
  }
};
