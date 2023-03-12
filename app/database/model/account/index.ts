import {Model} from '@nozbe/watermelondb';

import {WDB_TBL_ACCOUNT} from '../../constants/table';

export default class Account extends Model {
  static table = WDB_TBL_ACCOUNT;
}
