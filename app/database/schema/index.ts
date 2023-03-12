import {appSchema, tableSchema} from '@nozbe/watermelondb';

import {WDB_TBL_ACCOUNT, WDB_TBL_USER} from '../../constants/table';

const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: WDB_TBL_USER,
      columns: [
        {name: 'name', type: 'string', isOptional: true},
        {name: 'pin', type: 'string'},
      ],
    }),
    tableSchema({
      name: WDB_TBL_ACCOUNT,
      columns: [
        {name: 'balance', type: 'string'},
        {name: 'crypto_type', type: 'string', isIndexed: true},
      ],
    }),
  ],
});

export default schema;
