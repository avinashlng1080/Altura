import type Model from '@nozbe/watermelondb/Model';

declare class UserModel extends Model {
  /** table (name) : User */
  static table: string;

  name: string;

  pin: string;

  setPin(bal: string): Promise<void>;

  setName(type: string): Promise<void>;
}

export default UserModel;
