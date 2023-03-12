import {Model} from '@nozbe/watermelondb';
import {text, writer} from '@nozbe/watermelondb/decorators';

import UserInterface from '../../../../types/models/user';
import {WDB_TBL_USER} from '../../../constants/table';
export default class User extends Model implements UserInterface {
  static table = WDB_TBL_USER;

  @text('name') name!: string;

  @text('pin') pin!: string;

  @writer async setPin(hashPin: string) {
    await this.update(u => {
      u.pin = hashPin;
    });
  }

  @writer async setName(name: string) {
    await this.update(u => {
      u.name = name;
    });
  }
}
