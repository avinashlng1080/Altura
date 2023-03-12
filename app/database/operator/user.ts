import CryptoJS from 'react-native-crypto-js';

import UserModel from '../../../types/models/user';
import {WDB_TBL_USER} from '../../constants/table';
import DatabaseManager from '../../database/manager';
export const createUser = async (pin: string, name?: string) => {
  try {
    const database = DatabaseManager.database;
    debugger;
    const cryptoPin = pin; //  CryptoJS.SHA256(pin).toString();
    let user;
    if (database) {
      await database.write(async () => {
        user = await database.get<UserModel>(WDB_TBL_USER).create(u => {
          u.pin = cryptoPin;
          u.name = name ?? u.name;
        });
      });
    }
    console.log('>>>  created !!', {user});
    return user;
  } catch (e) {
    console.error('An error occurred while creating a user', e);
  }
};
