/**
 * @flow
 * @relayHash e77cc3998776976b748e8221520023fe
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateUserInputType = {|
  username?: ?string,
  email?: ?string,
  password?: ?string,
|};
export type EditMutationVariables = {|
  userId: string,
  updateUser?: ?UpdateUserInputType,
  confirmPassword: string,
|};
export type EditMutationResponse = {|
  +updateUser: ?{|
    +user_id: ?string
  |}
|};
export type EditMutation = {|
  variables: EditMutationVariables,
  response: EditMutationResponse,
|};
*/


/*
mutation EditMutation(
  $userId: String!
  $updateUser: UpdateUserInputType
  $confirmPassword: String!
) {
  updateUser(userId: $userId, updateUser: $updateUser, confirmPassword: $confirmPassword) {
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
  },
  {
    "kind": "LocalArgument",
    "name": "updateUser",
    "type": "UpdateUserInputType",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "confirmPassword",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "confirmPassword",
        "variableName": "confirmPassword",
        "type": "String!"
      },
      {
        "kind": "Variable",
        "name": "updateUser",
        "variableName": "updateUser",
        "type": "UpdateUserInputType"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId",
        "type": "String!"
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "EditMutation",
    "type": "MutationSchema",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "EditMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "EditMutation",
    "id": null,
    "text": "mutation EditMutation(\n  $userId: String!\n  $updateUser: UpdateUserInputType\n  $confirmPassword: String!\n) {\n  updateUser(userId: $userId, updateUser: $updateUser, confirmPassword: $confirmPassword) {\n    user_id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f9391686d5b59d8c39da4398e2de61e8';
module.exports = node;
