import {Model} from '@nozbe/watermelondb';
import {text, writer} from '@nozbe/watermelondb/decorators';

import AccountInterface from '../../../../types/models/account';
import {WDB_TBL_ACCOUNT} from '../../../constants/table';
export default class Account extends Model implements AccountInterface {
  static table = WDB_TBL_ACCOUNT;
  @text('balance') balance!: string;

  @text('crypto_type') cryptoType!: string;

  @writer async setBalance(bal: string) {
    await this.update(acc => {
      acc.balance = bal;
    });
  }

  @writer async setCryptoType(type: string) {
    await this.update(acc => {
      acc.cryptoType = type;
    });
  }
}
