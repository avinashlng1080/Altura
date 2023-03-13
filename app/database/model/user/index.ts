import {Model} from '@nozbe/watermelondb';
import {field, text, writer} from '@nozbe/watermelondb/decorators';

import UserInterface from '../../../../types/models/user';
import {WDB_TBL_USER} from '../../../constants/table';
export default class User extends Model implements UserInterface {
  static table = WDB_TBL_USER;

  @text('name') name!: string;

  @field('is_logged_in') isLoggedIn!: boolean;

  @writer async setIsLoggedIn(isLoggedIn: boolean) {
    await this.update(u => {
      u.isLoggedIn = isLoggedIn;
    });
  }

  @writer async setName(name: string) {
    await this.update(u => {
      u.name = name;
    });
  }
}
