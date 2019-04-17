/**
 * @flow
 * @relayHash 08f5aef898a51e37afb526d27380ec43
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ChatHeaderQueryVariables = {|
  chatPartnerId?: ?string
|};
export type ChatHeaderQueryResponse = {|
  +user: ?{|
    +username: ?string,
    +avatar: ?string,
  |}
|};
export type ChatHeaderQuery = {|
  variables: ChatHeaderQueryVariables,
  response: ChatHeaderQueryResponse,
|};
*/


/*
query ChatHeaderQuery(
  $chatPartnerId: String
) {
  user(userId: $chatPartnerId) {
    username
    avatar
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "chatPartnerId",
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
        "variableName": "chatPartnerId",
        "type": "String"
      }
    ],
    "concreteType": "UserType",
    "plural": false,
    "selections": [
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
    "name": "ChatHeaderQuery",
    "type": "QuerySchema",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ChatHeaderQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ChatHeaderQuery",
    "id": null,
    "text": "query ChatHeaderQuery(\n  $chatPartnerId: String\n) {\n  user(userId: $chatPartnerId) {\n    username\n    avatar\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ba047b6b031ad0a4da77d23bf57666c1';
module.exports = node;
