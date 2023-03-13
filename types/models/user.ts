import type Model from '@nozbe/watermelondb/Model';

declare class UserModel extends Model {
  /** table (name) : User */
  static table: string;

  name: string;

  isLoggedIn: boolean;

  setIsLoggedIn(isLoggedIn: boolean): Promise<void>;

  setName(type: string): Promise<void>;
}

export default UserModel;
