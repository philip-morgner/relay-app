/**
 * @flow
 * @relayHash 5178269d201815156e413c652f23d545
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ChatWindowQueryVariables = {||};
export type ChatWindowQueryResponse = {|
  +messageList: ?$ReadOnlyArray<?{|
    +message: ?string,
    +author_id: ?string,
  |}>
|};
export type ChatWindowQuery = {|
  variables: ChatWindowQueryVariables,
  response: ChatWindowQueryResponse,
|};
*/


/*
query ChatWindowQuery {
  messageList {
    message
    author_id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "messageList",
    "storageKey": null,
    "args": null,
    "concreteType": "MessageType",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "message",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "author_id",
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
    "name": "ChatWindowQuery",
    "type": "QuerySchema",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ChatWindowQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ChatWindowQuery",
    "id": null,
    "text": "query ChatWindowQuery {\n  messageList {\n    message\n    author_id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7059a896e0a87a02d549248adcd51924';
module.exports = node;
