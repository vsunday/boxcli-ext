`box-u-ext collections`
=======================

List your collections

* [`box-u-ext collections`](#box-u-ext-collections)
* [`box-u-ext collections:add ITEMTYPE ITEMID COLLECTIONID`](#box-u-ext-collectionsadd-itemtype-itemid-collectionid)
* [`box-u-ext collections:items ID`](#box-u-ext-collectionsitems-id)
* [`box-u-ext collections:remove ITEMTYPE ITEMID COLLECTIONID`](#box-u-ext-collectionsremove-itemtype-itemid-collectionid)

## `box-u-ext collections`

List your collections

```
USAGE
  $ box-u-ext collections

OPTIONS
  -h, --help                             Show CLI help
  -q, --quiet                            Suppress any non-error output to stderr
  -s, --save                             Save report to default reports folder on disk
  -t, --token=token                      Provide a token to perform this call
  -v, --verbose                          Show verbose output, which can be helpful for debugging
  -y, --yes                              Automatically respond yes to all confirmation prompts
  --as-user=as-user                      Provide an ID for a user
  --bulk-file-path=bulk-file-path        File path to bulk .csv or .json objects
  --csv                                  Output formatted CSV
  --fields=fields                        Comma separated list of fields to show
  --json                                 Output formatted JSON
  --no-color                             Turn off colors for logging
  --save-to-file-path=save-to-file-path  Override default file path to save report

ALIASES
  $ box-u-ext collections:list

EXAMPLE
  box collections
```

_See code: [src/commands/collections/index.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.4/src/commands/collections/index.js)_

## `box-u-ext collections:add ITEMTYPE ITEMID COLLECTIONID`

Add an item to a collection

```
USAGE
  $ box-u-ext collections:add ITEMTYPE ITEMID COLLECTIONID

ARGUMENTS
  ITEMTYPE      (folder|file|web_link) Type of item
  ITEMID        ID of the of item
  COLLECTIONID  ID of collection

OPTIONS
  -h, --help                             Show CLI help
  -q, --quiet                            Suppress any non-error output to stderr
  -s, --save                             Save report to default reports folder on disk
  -t, --token=token                      Provide a token to perform this call
  -v, --verbose                          Show verbose output, which can be helpful for debugging
  -y, --yes                              Automatically respond yes to all confirmation prompts
  --as-user=as-user                      Provide an ID for a user
  --bulk-file-path=bulk-file-path        File path to bulk .csv or .json objects
  --csv                                  Output formatted CSV
  --fields=fields                        Comma separated list of fields to show
  --json                                 Output formatted JSON
  --no-color                             Turn off colors for logging
  --save-to-file-path=save-to-file-path  Override default file path to save report

EXAMPLE
  box collections:add file 11111 12345
```

_See code: [src/commands/collections/add.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.4/src/commands/collections/add.js)_

## `box-u-ext collections:items ID`

Get items in a collection

```
USAGE
  $ box-u-ext collections:items ID

ARGUMENTS
  ID  ID of the collection to retrieve the items of

OPTIONS
  -h, --help                             Show CLI help
  -q, --quiet                            Suppress any non-error output to stderr
  -s, --save                             Save report to default reports folder on disk
  -t, --token=token                      Provide a token to perform this call
  -v, --verbose                          Show verbose output, which can be helpful for debugging
  -y, --yes                              Automatically respond yes to all confirmation prompts
  --as-user=as-user                      Provide an ID for a user
  --bulk-file-path=bulk-file-path        File path to bulk .csv or .json objects
  --csv                                  Output formatted CSV
  --fields=fields                        Comma separated list of fields to show
  --json                                 Output formatted JSON

  --max-items=max-items                  A value that indicates the maximum number of results to return. This only
                                         specifies a maximum boundary and will not guarantee the minimum number of
                                         results returned. When the max-items (x) is greater than 1000, then the maximum
                                         ceil(x/1000) requests will be made.

  --no-color                             Turn off colors for logging

  --save-to-file-path=save-to-file-path  Override default file path to save report

EXAMPLE
  box collections:items 12345
```

_See code: [src/commands/collections/items.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.4/src/commands/collections/items.js)_

## `box-u-ext collections:remove ITEMTYPE ITEMID COLLECTIONID`

Remove an item from a collection

```
USAGE
  $ box-u-ext collections:remove ITEMTYPE ITEMID COLLECTIONID

ARGUMENTS
  ITEMTYPE      (folder|file) Type of item
  ITEMID        ID of item
  COLLECTIONID  ID of collection

OPTIONS
  -h, --help                             Show CLI help
  -q, --quiet                            Suppress any non-error output to stderr
  -s, --save                             Save report to default reports folder on disk
  -t, --token=token                      Provide a token to perform this call
  -v, --verbose                          Show verbose output, which can be helpful for debugging
  -y, --yes                              Automatically respond yes to all confirmation prompts
  --as-user=as-user                      Provide an ID for a user
  --bulk-file-path=bulk-file-path        File path to bulk .csv or .json objects
  --csv                                  Output formatted CSV
  --fields=fields                        Comma separated list of fields to show
  --json                                 Output formatted JSON
  --no-color                             Turn off colors for logging
  --save-to-file-path=save-to-file-path  Override default file path to save report

EXAMPLE
  box collections:remove file 11111 12345
```

_See code: [src/commands/collections/remove.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.4/src/commands/collections/remove.js)_
