import type Model from '@nozbe/watermelondb/Model';

declare class AccountModel extends Model {
  /** table (name) : Account */
  static table: string;

  balance: string;

  cryptoType: string;

  setBalance(bal: string): Promise<void>;

  setCryptoType(type: string): Promise<void>;
}

export default AccountModel;
