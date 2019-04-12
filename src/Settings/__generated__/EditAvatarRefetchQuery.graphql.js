/**
 * @flow
 * @relayHash 95c4ea68cb045995b462186385467427
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type EditAvatar_user$ref = any;
export type EditAvatarRefetchQueryVariables = {|
  userId?: ?string
|};
export type EditAvatarRefetchQueryResponse = {|
  +user: ?{|
    +$fragmentRefs: EditAvatar_user$ref
  |}
|};
export type EditAvatarRefetchQuery = {|
  variables: EditAvatarRefetchQueryVariables,
  response: EditAvatarRefetchQueryResponse,
|};
*/


/*
query EditAvatarRefetchQuery(
  $userId: String
) {
  user(userId: $userId) {
    ...EditAvatar_user
  }
}

fragment EditAvatar_user on UserType {
  avatar
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
    "kind": "Variable",
    "name": "userId",
    "variableName": "userId",
    "type": "String"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "EditAvatarRefetchQuery",
    "type": "QuerySchema",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UserType",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "EditAvatar_user",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EditAvatarRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": (v1/*: any*/),
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
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "EditAvatarRefetchQuery",
    "id": null,
    "text": "query EditAvatarRefetchQuery(\n  $userId: String\n) {\n  user(userId: $userId) {\n    ...EditAvatar_user\n  }\n}\n\nfragment EditAvatar_user on UserType {\n  avatar\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2bc71a61f4e27a58848a65a2a3a79525';
module.exports = node;
