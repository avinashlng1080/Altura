import {WDB_TBL_USER} from '../constants/table';
import DatabaseManager from '../database/manager';

import type UserModel from '../../types/models/user';

export const queryUser = async () => {
  try {
    const database = DatabaseManager.database;
    let user: UserModel | null = null;
    if (database) {
      const usersCollection = await database
        .get<UserModel>(WDB_TBL_USER)
        .query()
        .fetch();
      console.log('>>>  users ', {usersCollection});

      user = usersCollection?.length ? usersCollection[0] : null;
    }
    return user;
  } catch (e) {
    console.error('Error in queryUser', e);
  }
};
