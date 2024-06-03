`box-u-ext folders`
===================

Manage folders

* [`box-u-ext folders:collaborations ID`](#box-u-ext-folderscollaborations-id)
* [`box-u-ext folders:collaborations:add ID`](#box-u-ext-folderscollaborationsadd-id)
* [`box-u-ext folders:copy ID PARENTID`](#box-u-ext-folderscopy-id-parentid)
* [`box-u-ext folders:create PARENTID NAME`](#box-u-ext-folderscreate-parentid-name)
* [`box-u-ext folders:delete ID`](#box-u-ext-foldersdelete-id)
* [`box-u-ext folders:download ID`](#box-u-ext-foldersdownload-id)
* [`box-u-ext folders:get ID`](#box-u-ext-foldersget-id)
* [`box-u-ext folders:items ID`](#box-u-ext-foldersitems-id)
* [`box-u-ext folders:locks ID`](#box-u-ext-folderslocks-id)
* [`box-u-ext folders:locks:create ID`](#box-u-ext-folderslockscreate-id)
* [`box-u-ext folders:locks:delete ID`](#box-u-ext-folderslocksdelete-id)
* [`box-u-ext folders:metadata ID`](#box-u-ext-foldersmetadata-id)
* [`box-u-ext folders:metadata:add ID`](#box-u-ext-foldersmetadataadd-id)
* [`box-u-ext folders:metadata:get ID`](#box-u-ext-foldersmetadataget-id)
* [`box-u-ext folders:metadata:remove ID`](#box-u-ext-foldersmetadataremove-id)
* [`box-u-ext folders:metadata:set ID`](#box-u-ext-foldersmetadataset-id)
* [`box-u-ext folders:metadata:update ID`](#box-u-ext-foldersmetadataupdate-id)
* [`box-u-ext folders:move ID PARENTID`](#box-u-ext-foldersmove-id-parentid)
* [`box-u-ext folders:rename ID NAME`](#box-u-ext-foldersrename-id-name)
* [`box-u-ext folders:share ID`](#box-u-ext-foldersshare-id)
* [`box-u-ext folders:unshare ID`](#box-u-ext-foldersunshare-id)
* [`box-u-ext folders:update ID`](#box-u-ext-foldersupdate-id)
* [`box-u-ext folders:upload PATH`](#box-u-ext-foldersupload-path)

## `box-u-ext folders:collaborations ID`

List all collaborations on a folder

```
USAGE
  $ box-u-ext folders:collaborations ID

ARGUMENTS
  ID  ID of the folder to get the collaborations on

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
  $ box-u-ext folders:collaborations:list

EXAMPLE
  box folders:collaborations 22222
```

_See code: [src/commands/folders/collaborations/index.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.2/src/commands/folders/collaborations/index.js)_

## `box-u-ext folders:collaborations:add ID`

Create a collaboration for a folder

```
USAGE
  $ box-u-ext folders:collaborations:add ID

ARGUMENTS
  ID  ID of the folder to add a collaboration to

OPTIONS
  -h, --help                                                                               Show CLI help

  -q, --quiet                                                                              Suppress any non-error output
                                                                                           to stderr

  -r, --role=editor|viewer|previewer|uploader|previewer_uploader|viewer_uploader|co-owner  An option to manually enter
                                                                                           the role

  -s, --save                                                                               Save report to default
                                                                                           reports folder on disk

  -t, --token=token                                                                        Provide a token to perform
                                                                                           this call

  -v, --verbose                                                                            Show verbose output, which
                                                                                           can be helpful for debugging

  -y, --yes                                                                                Automatically respond yes to
                                                                                           all confirmation prompts

  --as-user=as-user                                                                        Provide an ID for a user

  --bulk-file-path=bulk-file-path                                                          File path to bulk .csv or
                                                                                           .json objects

  --[no-]can-view-path                                                                     Whether view path
                                                                                           collaboration feature is
                                                                                           enabled or not

  --csv                                                                                    Output formatted CSV

  --fields=fields                                                                          Comma separated list of
                                                                                           fields to show

  --group-id=group-id                                                                      Id for group to collaborate

  --id-only                                                                                Return only an ID to output
                                                                                           from this command

  --json                                                                                   Output formatted JSON

  --login=login                                                                            Login for user to collaborate

  --no-color                                                                               Turn off colors for logging

  --[no-]notify                                                                            All users will receive email
                                                                                           notification of the
                                                                                           collaboration

  --save-to-file-path=save-to-file-path                                                    Override default file path to
                                                                                           save report

  --user-id=user-id                                                                        Id for user to collaborate

EXAMPLE
  box folders:collaborations:add 22222 --role editor --user-id 33333
```

_See code: [src/commands/folders/collaborations/add.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.2/src/commands/folders/collaborations/add.js)_

## `box-u-ext folders:copy ID PARENTID`

Copy a folder to a different folder

```
USAGE
  $ box-u-ext folders:copy ID PARENTID

ARGUMENTS
  ID        ID of the folder to copy
  PARENTID  ID of the new parent folder to copy the folder into

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
  --id-only                              Return only an ID to output from this command
  --json                                 Output formatted JSON
  --name=name                            An optional new name for the folder
  --no-color                             Turn off colors for logging
  --save-to-file-path=save-to-file-path  Override default file path to save report

EXAMPLE
  box folders:copy 22222 44444
```

_See code: [src/commands/folders/copy.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.2/src/commands/folders/copy.js)_

## `box-u-ext folders:create PARENTID NAME`

Create a new folder

```
USAGE
  $ box-u-ext folders:create PARENTID NAME

ARGUMENTS
  PARENTID  ID of parent folder to add new folder to, use '0' for the root folder
  NAME      Name of new folder

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
  --description=description              A description for folder <DESCRIPTION>
  --fields=fields                        Comma separated list of fields to show
  --id-only                              Return only an ID to output from this command
  --json                                 Output formatted JSON
  --no-color                             Turn off colors for logging
  --save-to-file-path=save-to-file-path  Override default file path to save report

EXAMPLE
  box folders:create 22222 "New Subfolder"
```

_See code: [src/commands/folders/create.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.2/src/commands/folders/create.js)_

## `box-u-ext folders:delete ID`

Delete a folder

```
USAGE
  $ box-u-ext folders:delete ID

ARGUMENTS
  ID  ID of the folder to delete

OPTIONS
  -f, --force                            Permanently delete the folder, bypassing the trash
  -h, --help                             Show CLI help
  -q, --quiet                            Suppress any non-error output to stderr
  -r, --recursive                        Delete the folder, even if it still has items in it
  -s, --save                             Save report to default reports folder on disk
  -t, --token=token                      Provide a token to perform this call
  -v, --verbose                          Show verbose output, which can be helpful for debugging
  -y, --yes                              Automatically respond yes to all confirmation prompts
  --as-user=as-user                      Provide an ID for a user
  --bulk-file-path=bulk-file-path        File path to bulk .csv or .json objects
  --csv                                  Output formatted CSV
  --etag=etag                            Only delete if etag value matches
  --fields=fields                        Comma separated list of fields to show
  --json                                 Output formatted JSON
  --no-color                             Turn off colors for logging
  --save-to-file-path=save-to-file-path  Override default file path to save report

EXAMPLE
  box folders:delete 22222
```

_See code: [src/commands/folders/delete.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.2/src/commands/folders/delete.js)_

## `box-u-ext folders:download ID`

Download a folder

```
USAGE
  $ box-u-ext folders:download ID

ARGUMENTS
  ID  ID of the folder to download

OPTIONS
  -h, --help                             Show CLI help
  -q, --quiet                            Suppress any non-error output to stderr
  -s, --save                             Save report to default reports folder on disk
  -t, --token=token                      Provide a token to perform this call
  -v, --verbose                          Show verbose output, which can be helpful for debugging
  -y, --yes                              Automatically respond yes to all confirmation prompts
  --as-user=as-user                      Provide an ID for a user
  --bulk-file-path=bulk-file-path        File path to bulk .csv or .json objects
  --[no-]create-path                     Recursively creates a path to a directory if it does not exist
  --csv                                  Output formatted CSV
  --depth=depth                          Number of levels deep to recurse when downloading the folder tree
  --destination=destination              The destination folder to download the Box folder into
  --fields=fields                        Comma separated list of fields to show
  --json                                 Output formatted JSON
  --no-color                             Turn off colors for logging
  --[no-]overwrite                       [default: true] Overwrite the folder if it already exists.
  --save-to-file-path=save-to-file-path  Override default file path to save report
  --zip                                  Download the folder into a single .zip archive

EXAMPLE
  box folders:download 22222
```

_See code: [src/commands/folders/download.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.2/src/commands/folders/download.js)_

## `box-u-ext folders:get ID`

Get information about a folder

```
USAGE
  $ box-u-ext folders:get ID

ARGUMENTS
  ID  ID of folder to get; use 0 for the root folder

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
  box folders:get 22222
```

_See code: [src/commands/folders/get.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.2/src/commands/folders/get.js)_

## `box-u-ext folders:items ID`

List items in a folder

```
USAGE
  $ box-u-ext folders:items ID

ARGUMENTS
  ID  ID of the folder to get the items in, use 0 for the root folder

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
  --direction=ASC|DESC                   The direction to order returned items
  --fields=fields                        Comma separated list of fields to show
  --json                                 Output formatted JSON

  --max-items=max-items                  A value that indicates the maximum number of results to return. This only
                                         specifies a maximum boundary and will not guarantee the minimum number of
                                         results returned. When the max-items (x) is greater than 1000, then the maximum
                                         ceil(x/1000) requests will be made.

  --no-color                             Turn off colors for logging

  --save-to-file-path=save-to-file-path  Override default file path to save report

  --sort=id|name|date                    The parameter to sort returned items

ALIASES
  $ box-u-ext folders:list-items

EXAMPLE
  box folders:items 22222
```

_See code: [src/commands/folders/items.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.2/src/commands/folders/items.js)_

## `box-u-ext folders:locks ID`

List all locks on a folder

```
USAGE
  $ box-u-ext folders:locks ID

ARGUMENTS
  ID  ID of the folder to get the locks on

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
  $ box-u-ext folders:locks:list

EXAMPLE
  box folders:locks 22222
```

_See code: [src/commands/folders/locks/index.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.2/src/commands/folders/locks/index.js)_

## `box-u-ext folders:locks:create ID`

Create a lock on a folder

```
USAGE
  $ box-u-ext folders:locks:create ID

ARGUMENTS
  ID  ID of the folder to create a lock on

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
  box folders:locks:create 22222
```

_See code: [src/commands/folders/locks/create.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.2/src/commands/folders/locks/create.js)_

## `box-u-ext folders:locks:delete ID`

Delete a lock on a folder

```
USAGE
  $ box-u-ext folders:locks:delete ID

ARGUMENTS
  ID  ID of the folder lock to delete

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
  box folders:locks:delete 22222
```

_See code: [src/commands/folders/locks/delete.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.2/src/commands/folders/locks/delete.js)_

## `box-u-ext folders:metadata ID`

Get all metadata on a folder

```
USAGE
  $ box-u-ext folders:metadata ID

ARGUMENTS
  ID  ID of the folder to get all metadata on

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
  $ box-u-ext folders:metadata:get-all

EXAMPLE
  box folders:metadata 22222
```

_See code: [src/commands/folders/metadata/index.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.2/src/commands/folders/metadata/index.js)_

## `box-u-ext folders:metadata:add ID`

Add metadata to a folder

```
USAGE
  $ box-u-ext folders:metadata:add ID

ARGUMENTS
  ID  ID of the folder to add metadata to

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

  --data=data                            (required) Metadata key and value, in the form "key=value".  Note: For float
                                         type, use "#" at the beginning of digits: key2=#1234.50

  --fields=fields                        Comma separated list of fields to show

  --json                                 Output formatted JSON

  --no-color                             Turn off colors for logging

  --save-to-file-path=save-to-file-path  Override default file path to save report

  --scope=scope                          [default: enterprise] The scope of the metadata template to use

  --template-key=template-key            (required) The key of the metadata template to use

ALIASES
  $ box-u-ext folders:metadata:create

EXAMPLE
  box folders:metadata:add 22222 --template-key employeeRecord --data "name=John Doe" --data department=Sales
```

_See code: [src/commands/folders/metadata/add.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.2/src/commands/folders/metadata/add.js)_

## `box-u-ext folders:metadata:get ID`

Get information about a metadata object

```
USAGE
  $ box-u-ext folders:metadata:get ID

ARGUMENTS
  ID  ID of the folder to get metadata on

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
  --scope=scope                          [default: enterprise] The scope of the metadata template to retrieve
  --template-key=template-key            (required) The key of the metadata template to retrieve

EXAMPLE
  box folders:metadata:get 22222 --template-key employeeRecord
```

_See code: [src/commands/folders/metadata/get.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.2/src/commands/folders/metadata/get.js)_

## `box-u-ext folders:metadata:remove ID`

Delete metadata from a folder

```
USAGE
  $ box-u-ext folders:metadata:remove ID

ARGUMENTS
  ID  ID of the folder to remove metadata from

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
  --scope=scope                          [default: enterprise] The scope of the metadata template to remove
  --template-key=template-key            (required) The key of the metadata template to remove

ALIASES
  $ box-u-ext folders:metadata:delete

EXAMPLE
  box folders:metadata:remove 22222 --scope global --template-key properties
```

_See code: [src/commands/folders/metadata/remove.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.2/src/commands/folders/metadata/remove.js)_

## `box-u-ext folders:metadata:set ID`

Set metadata on a folder

```
USAGE
  $ box-u-ext folders:metadata:set ID

ARGUMENTS
  ID  ID of the folder to add metadata to

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

  --data=data                            (required) Metadata key and value, in the form "key=value".  Note: For float
                                         type, use "#" at the beginning of digits: key2=#1234.50

  --fields=fields                        Comma separated list of fields to show

  --json                                 Output formatted JSON

  --no-color                             Turn off colors for logging

  --save-to-file-path=save-to-file-path  Override default file path to save report

  --scope=scope                          [default: enterprise] The scope of the metadata template to use

  --template-key=template-key            (required) The key of the metadata template to use

EXAMPLE
  box folders:metadata:set 22222 --template-key employeeRecord --data "name=John Doe" --data department=Sales
```

_See code: [src/commands/folders/metadata/set.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.2/src/commands/folders/metadata/set.js)_

## `box-u-ext folders:metadata:update ID`

Update the metadata attached to a folder

```
USAGE
  $ box-u-ext folders:metadata:update ID

ARGUMENTS
  ID  ID of the folder to update metadata on

OPTIONS
  -a, --add=add                          Add a key to the metadata document; must be in the form key=value

  -c, --copy=copy                        Copy a metadata value to another key; must be in the form
                                         sourceKey>destinationKey

  -h, --help                             Show CLI help

  -m, --move=move                        Move a metadata value from one key to another; must be in the form
                                         sourceKey>destinationKey

  -q, --quiet                            Suppress any non-error output to stderr

  -s, --save                             Save report to default reports folder on disk

  -t, --test=test                        Test that a metadata key contains a specific value; must be in the form
                                         key=value

  -t, --token=token                      Provide a token to perform this call

  -v, --verbose                          Show verbose output, which can be helpful for debugging

  -y, --yes                              Automatically respond yes to all confirmation prompts

  --as-user=as-user                      Provide an ID for a user

  --bulk-file-path=bulk-file-path        File path to bulk .csv or .json objects

  --csv                                  Output formatted CSV

  --fields=fields                        Comma separated list of fields to show

  --json                                 Output formatted JSON

  --no-color                             Turn off colors for logging

  --remove=remove                        Remove a key from the metadata document

  --replace=replace                      Replace the value of an existing metadata key; must be in the form key=value

  --save-to-file-path=save-to-file-path  Override default file path to save report

  --scope=scope                          [default: enterprise] The scope of the metadata template to update against

  --template-key=template-key            (required) The key of the metadata template to update against

EXAMPLE
  box folders:metadata:update 22222 --template-key employeeRecord --replace department=Finance
```

_See code: [src/commands/folders/metadata/update.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.2/src/commands/folders/metadata/update.js)_

## `box-u-ext folders:move ID PARENTID`

Move a folder to a different folder

```
USAGE
  $ box-u-ext folders:move ID PARENTID

ARGUMENTS
  ID        ID of folder to copy
  PARENTID  ID of the new parent folder to move the folder into

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
  --etag=etag                            Only move if etag value matches
  --fields=fields                        Comma separated list of fields to show
  --json                                 Output formatted JSON
  --no-color                             Turn off colors for logging
  --save-to-file-path=save-to-file-path  Override default file path to save report

EXAMPLE
  box folders:move 22222 44444
```

_See code: [src/commands/folders/move.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.2/src/commands/folders/move.js)_

## `box-u-ext folders:rename ID NAME`

Rename a folder

```
USAGE
  $ box-u-ext folders:rename ID NAME

ARGUMENTS
  ID    ID of the folder to rename
  NAME  New name for the folder

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
  --description=description              Change the folder description
  --etag=etag                            Only rename if etag value matches
  --fields=fields                        Comma separated list of fields to show
  --json                                 Output formatted JSON
  --no-color                             Turn off colors for logging
  --save-to-file-path=save-to-file-path  Override default file path to save report

EXAMPLE
  box folders:rename 22222 "New Folder Name"
```

_See code: [src/commands/folders/rename.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.2/src/commands/folders/rename.js)_

## `box-u-ext folders:share ID`

Create a shared link for a folder

```
USAGE
  $ box-u-ext folders:share ID

ARGUMENTS
  ID  ID of the folder to share

OPTIONS
  -h, --help                             Show CLI help
  -q, --quiet                            Suppress any non-error output to stderr
  -s, --save                             Save report to default reports folder on disk
  -t, --token=token                      Provide a token to perform this call
  -v, --verbose                          Show verbose output, which can be helpful for debugging
  -y, --yes                              Automatically respond yes to all confirmation prompts
  --access=access                        Shared link access level
  --as-user=as-user                      Provide an ID for a user
  --bulk-file-path=bulk-file-path        File path to bulk .csv or .json objects
  --[no-]can-download                    Whether the shared link allows downloads
  --csv                                  Output formatted CSV
  --fields=fields                        Comma separated list of fields to show
  --json                                 Output formatted JSON
  --no-color                             Turn off colors for logging
  --password=password                    Shared link password
  --save-to-file-path=save-to-file-path  Override default file path to save report

  --unshared-at=unshared-at              Time that this link will become disabled. Use s for seconds, m for minutes, h
                                         for hours, d for days, w for weeks, M for months. For example, 30 seconds is
                                         30s from now.

  --vanity-name=vanity-name              Defines a custom vanity name to use in the shared link URL. It should be
                                         between 12 and 30 characters. This field can contains only letters, numbers and
                                         hyphens.

ALIASES
  $ box-u-ext folders:shared-links:create
  $ box-u-ext folders:shared-links:update

EXAMPLE
  box folders:share 22222 --access company --vanity-name my-custom-name-123
```

_See code: [src/commands/folders/share.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.2/src/commands/folders/share.js)_

## `box-u-ext folders:unshare ID`

Delete a shared link for a folder

```
USAGE
  $ box-u-ext folders:unshare ID

ARGUMENTS
  ID  ID of the folder to unshare

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
  $ box-u-ext folders:shared-links:delete

EXAMPLE
  box folders:unshare 22222
```

_See code: [src/commands/folders/unshare.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.2/src/commands/folders/unshare.js)_

## `box-u-ext folders:update ID`

Update a folder

```
USAGE
  $ box-u-ext folders:update ID

ARGUMENTS
  ID  ID of the folder to update

OPTIONS
  -h, --help                                Show CLI help
  -q, --quiet                               Suppress any non-error output to stderr
  -s, --save                                Save report to default reports folder on disk
  -t, --token=token                         Provide a token to perform this call
  -v, --verbose                             Show verbose output, which can be helpful for debugging
  -y, --yes                                 Automatically respond yes to all confirmation prompts
  --as-user=as-user                         Provide an ID for a user
  --bulk-file-path=bulk-file-path           File path to bulk .csv or .json objects

  --[no-]can-non-owners-invite              Specifies if users who are not the owner of the folder can invite new
                                            collaborators to the folder.

  --[no-]can-non-owners-view-collaborators  Restricts collaborators who are not the owner of this folder from viewing
                                            other collaborations on this folder.

  --csv                                     Output formatted CSV

  --description=description                 New description for folder

  --etag=etag                               Only apply updates if the etag value matches

  --fields=fields                           Comma separated list of fields to show

  --json                                    Output formatted JSON

  --name=name                               New name for folder

  --no-color                                Turn off colors for logging

  --[no-]restrict-collaboration             Restrict collaboration so only owners can invite new collaborators

  --[no-]restrict-to-enterprise             Restrict collaboration so only users in the folder owner's enterprise can be
                                            added

  --save-to-file-path=save-to-file-path     Override default file path to save report

  --[no-]sync                               Whether the folder is synced to desktop

  --tags=tags                               Comma seperated tags

  --upload-email-access=open|collaborators  Upload email access level

EXAMPLE
  box folders:update 22222 --name "New Folder Name"
```

_See code: [src/commands/folders/update.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.2/src/commands/folders/update.js)_

## `box-u-ext folders:upload PATH`

Upload a folder

```
USAGE
  $ box-u-ext folders:upload PATH

ARGUMENTS
  PATH  Local path to the folder to upload

OPTIONS
  -h, --help                             Show CLI help
  -p, --parent-folder=parent-folder      [default: 0] Folder to upload this folder into; defaults to the root folder
  -q, --quiet                            Suppress any non-error output to stderr
  -s, --save                             Save report to default reports folder on disk
  -t, --token=token                      Provide a token to perform this call
  -v, --verbose                          Show verbose output, which can be helpful for debugging
  -y, --yes                              Automatically respond yes to all confirmation prompts
  --as-user=as-user                      Provide an ID for a user
  --bulk-file-path=bulk-file-path        File path to bulk .csv or .json objects
  --csv                                  Output formatted CSV
  --fields=fields                        Comma separated list of fields to show
  --folder-name=folder-name              Name to use for folder if not using local folder name
  --id-only                              Return only an ID to output from this command
  --json                                 Output formatted JSON
  --no-color                             Turn off colors for logging
  --save-to-file-path=save-to-file-path  Override default file path to save report

EXAMPLE
  box folders:upload /path/to/folder
```

_See code: [src/commands/folders/upload.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.2/src/commands/folders/upload.js)_
