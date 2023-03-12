import {Model} from '@nozbe/watermelondb';

import {WDB_TBL_USER} from '../../../constants/table';

export default class User extends Model {
  static table = WDB_TBL_USER;
}
