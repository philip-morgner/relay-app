/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EditAvatar_user$ref: FragmentReference;
export type EditAvatar_user = {|
  +avatar: ?string,
  +$refType: EditAvatar_user$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "EditAvatar_user",
  "type": "UserType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "avatar",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '89d6b19ef4037ddace47eec9ecac23f4';
module.exports = node;
