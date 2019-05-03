/**
 * @flow
 * @relayHash c4c3c5c7314061e67061a3032f5599d9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SettingsMutationVariables = {|
  userId: string
|};
export type SettingsMutationResponse = {|
  +removeUser: ?{|
    +user_id: ?string
  |}
|};
export type SettingsMutation = {|
  variables: SettingsMutationVariables,
  response: SettingsMutationResponse,
|};
*/


/*
mutation SettingsMutation(
  $userId: String!
) {
  removeUser(userId: $userId) {
    user_id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "removeUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId",
        "type": "String!"
      }
    ],
    "concreteType": "RemoveUserType",
    "plural": false,
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
    "name": "SettingsMutation",
    "type": "MutationSchema",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SettingsMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "SettingsMutation",
    "id": null,
    "text": "mutation SettingsMutation(\n  $userId: String!\n) {\n  removeUser(userId: $userId) {\n    user_id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b649bfeebbf86737fff4746cd5d1a8fb';
module.exports = node;
