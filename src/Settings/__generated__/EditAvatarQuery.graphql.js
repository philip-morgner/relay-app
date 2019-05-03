/**
 * @flow
 * @relayHash 0e9941af8c2fd16cc5a61c701ee7ce40
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditAvatarQueryVariables = {|
  userId?: ?string
|};
export type EditAvatarQueryResponse = {|
  +user: ?{|
    +avatar: ?string
  |}
|};
export type EditAvatarQuery = {|
  variables: EditAvatarQueryVariables,
  response: EditAvatarQueryResponse,
|};
*/


/*
query EditAvatarQuery(
  $userId: String
) {
  user(userId: $userId) {
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
    "name": "EditAvatarQuery",
    "type": "QuerySchema",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "EditAvatarQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "EditAvatarQuery",
    "id": null,
    "text": "query EditAvatarQuery(\n  $userId: String\n) {\n  user(userId: $userId) {\n    avatar\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '06031413b0dd2728d030ef3d4ccf58a9';
module.exports = node;
