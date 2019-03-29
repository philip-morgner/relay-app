/**
 * @flow
 * @relayHash 556e4df2a6f73cd1a53d495a39b4a336
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserListQueryVariables = {||};
export type UserListQueryResponse = {|
  +userList: ?$ReadOnlyArray<?{|
    +user_id: ?string
  |}>
|};
export type UserListQuery = {|
  variables: UserListQueryVariables,
  response: UserListQueryResponse,
|};
*/


/*
query UserListQuery {
  userList {
    user_id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "userList",
    "storageKey": null,
    "args": null,
    "concreteType": "UserType",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "user_id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UserListQuery",
    "type": "QuerySchema",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UserListQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "UserListQuery",
    "id": null,
    "text": "query UserListQuery {\n  userList {\n    user_id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd1dfb6ddb4ce7a1fce3b4e388d478357';
module.exports = node;
