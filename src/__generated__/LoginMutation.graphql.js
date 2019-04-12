/**
 * @flow
 * @relayHash 2535a4339fc5015f6126f310b2421084
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
    +user_id: ?string,
    +access_token: ?string,
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
    "text": "mutation LoginMutation(\n  $authUser: AuthenticationInputType\n) {\n  currUser(authUser: $authUser) {\n    user_id\n    access_token\n    username\n    email\n    avatar\n    hasAvatar\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5d5faadb27345564fdc3ee2c70b5aa9b';
module.exports = node;
