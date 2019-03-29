/**
 * @flow
 * @relayHash e004fab170d76c5404ce6913ead376dc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserQueryVariables = {|
  userId?: ?string
|};
export type UserQueryResponse = {|
  +user: ?{|
    +user_id: ?string,
    +username: ?string,
    +email: ?string,
    +avatar: ?string,
  |}
|};
export type UserQuery = {|
  variables: UserQueryVariables,
  response: UserQueryResponse,
|};
*/


/*
query UserQuery(
  $userId: String
) {
  user(userId: $userId) {
    user_id
    username
    email
    avatar
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "user",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId",
        "type": "String"
      }
    ],
    "concreteType": "UserType",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "user_id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "username",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "email",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "avatar",
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
    "name": "UserQuery",
    "type": "QuerySchema",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UserQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "UserQuery",
    "id": null,
    "text": "query UserQuery(\n  $userId: String\n) {\n  user(userId: $userId) {\n    user_id\n    username\n    email\n    avatar\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ea545d5f71402addb70ba22bc208d4ed';
module.exports = node;
