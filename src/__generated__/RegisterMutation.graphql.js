/**
 * @flow
 * @relayHash 7059ec5d9090e23fcc366041b172cf95
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RegistrationInputType = {|
  username?: ?string,
  email?: ?string,
  password?: ?string,
|};
export type RegisterMutationVariables = {|
  newUser?: ?RegistrationInputType
|};
export type RegisterMutationResponse = {|
  +registerUser: ?{|
    +user_id: ?string,
    +access_token: ?string,
    +username: ?string,
    +email: ?string,
    +avatar: ?string,
    +hasAvatar: ?boolean,
  |}
|};
export type RegisterMutation = {|
  variables: RegisterMutationVariables,
  response: RegisterMutationResponse,
|};
*/


/*
mutation RegisterMutation(
  $newUser: RegistrationInputType
) {
  registerUser(newUser: $newUser) {
    user_id
    access_token
    username
    email
    avatar
    hasAvatar
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "newUser",
    "type": "RegistrationInputType",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "registerUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "newUser",
        "variableName": "newUser",
        "type": "RegistrationInputType"
      }
    ],
    "concreteType": "RegistrationType",
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
        "name": "access_token",
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
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "hasAvatar",
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
    "name": "RegisterMutation",
    "type": "MutationSchema",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RegisterMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "RegisterMutation",
    "id": null,
    "text": "mutation RegisterMutation(\n  $newUser: RegistrationInputType\n) {\n  registerUser(newUser: $newUser) {\n    user_id\n    access_token\n    username\n    email\n    avatar\n    hasAvatar\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2f0a8a7c92e7042fcb86f4b3d6ca934f';
module.exports = node;
