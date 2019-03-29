/**
 * @flow
 * @relayHash 1ffe6392c325c92129f289e498664460
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AuthenticationInputType = {|
  username?: ?string,
  email?: ?string,
  password?: ?string,
|};
export type LoginMutationVariables = {|
  authUser?: ?AuthenticationInputType
|};
export type LoginMutationResponse = {|
  +currUser: ?{|
    +access_token: ?string,
    +user_id: ?string,
    +username: ?string,
    +email: ?string,
    +avatar: ?string,
    +hasAvatar: ?boolean,
  |}
|};
export type LoginMutation = {|
  variables: LoginMutationVariables,
  response: LoginMutationResponse,
|};
*/


/*
mutation LoginMutation(
  $authUser: AuthenticationInputType
) {
  currUser(authUser: $authUser) {
    access_token
    user_id
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
    "name": "authUser",
    "type": "AuthenticationInputType",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "currUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "authUser",
        "variableName": "authUser",
        "type": "AuthenticationInputType"
      }
    ],
    "concreteType": "AuthenticationType",
    "plural": false,
    "selections": [
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
    "name": "LoginMutation",
    "type": "MutationSchema",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "LoginMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "LoginMutation",
    "id": null,
    "text": "mutation LoginMutation(\n  $authUser: AuthenticationInputType\n) {\n  currUser(authUser: $authUser) {\n    access_token\n    user_id\n    username\n    email\n    avatar\n    hasAvatar\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a4c674d7ad23f600db53d5a940305842';
module.exports = node;
