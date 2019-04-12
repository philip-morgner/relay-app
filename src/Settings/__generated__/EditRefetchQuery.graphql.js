/**
 * @flow
 * @relayHash e48f27e275dc3e9cbf2675e48003802b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Edit_currUser$ref = any;
export type EditRefetchQueryVariables = {|
  userId?: ?string
|};
export type EditRefetchQueryResponse = {|
  +user: ?{|
    +$fragmentRefs: Edit_currUser$ref
  |}
|};
export type EditRefetchQuery = {|
  variables: EditRefetchQueryVariables,
  response: EditRefetchQueryResponse,
|};
*/


/*
query EditRefetchQuery(
  $userId: String
) {
  user(userId: $userId) {
    ...Edit_currUser
  }
}

fragment Edit_currUser on UserType {
  user_id
  username
  email
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
    "name": "EditRefetchQuery",
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
            "name": "Edit_currUser",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EditRefetchQuery",
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
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "EditRefetchQuery",
    "id": null,
    "text": "query EditRefetchQuery(\n  $userId: String\n) {\n  user(userId: $userId) {\n    ...Edit_currUser\n  }\n}\n\nfragment Edit_currUser on UserType {\n  user_id\n  username\n  email\n  avatar\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cead56e0b861c82b8e6673123e92c6fd';
module.exports = node;
