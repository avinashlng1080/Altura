import {WDB_TBL_ACCOUNT, WDB_TBL_USER} from '../../constants/table';

import schema from './index';
describe('*** Test schema for APP database ***', () => {
  it('=> The APP SCHEMA should strictly match', () => {
    expect(schema).toEqual({
      version: 1,
      unsafeSql: undefined,
      tables: {
        [WDB_TBL_USER]: {
          name: WDB_TBL_USER,
          unsafeSql: undefined,
          columns: {
            name: {name: 'name', type: 'string', isOptional: true},
            pin: {name: 'pin', type: 'string'},
          },
          columnArray: [
            {name: 'name', type: 'string', isOptional: true},
            {name: 'pin', type: 'string'},
          ],
        },
        [WDB_TBL_ACCOUNT]: {
          name: WDB_TBL_ACCOUNT,
          unsafeSql: undefined,
          columns: {
            balance: {name: 'balance', type: 'string'},
            crypto_type: {name: 'crypto_type', type: 'string', isIndexed: true},
          },
          columnArray: [
            {name: 'balance', type: 'string'},
            {name: 'crypto_type', type: 'string', isIndexed: true},
          ],
        },
      },
    });
  });
});
