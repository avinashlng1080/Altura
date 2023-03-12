import UserModel from '../../../types/models/user';
import {WDB_TBL_USER} from '../../constants/table';
import DatabaseManager from '../manager';
export const subscribeUser = (observer: (users: UserModel[]) => void) => {
  const database = DatabaseManager.database;
  if (database) {
    return database
      .get<UserModel>(WDB_TBL_USER)
      .query()
      .observe()
      .subscribe(observer);
  }
};
