`box-u-ext storage-policies`
============================

List storage policies

* [`box-u-ext storage-policies`](#box-u-ext-storage-policies)
* [`box-u-ext storage-policies:assign STORAGEPOLICYID USERID`](#box-u-ext-storage-policiesassign-storagepolicyid-userid)
* [`box-u-ext storage-policies:assignments:get ID`](#box-u-ext-storage-policiesassignmentsget-id)
* [`box-u-ext storage-policies:assignments:lookup ID`](#box-u-ext-storage-policiesassignmentslookup-id)
* [`box-u-ext storage-policies:assignments:remove ID`](#box-u-ext-storage-policiesassignmentsremove-id)
* [`box-u-ext storage-policies:get ID`](#box-u-ext-storage-policiesget-id)

## `box-u-ext storage-policies`

List storage policies

```
USAGE
  $ box-u-ext storage-policies

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

ALIASES
  $ box-u-ext storage-policies:list

EXAMPLE
  box storage-policies
```

_See code: [src/commands/storage-policies/index.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.1/src/commands/storage-policies/index.js)_

## `box-u-ext storage-policies:assign STORAGEPOLICYID USERID`

Assign a storage policy

```
USAGE
  $ box-u-ext storage-policies:assign STORAGEPOLICYID USERID

ARGUMENTS
  STORAGEPOLICYID  Id of the storage policy
  USERID           Id of the user to assign the storage policy to

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
  box storage-policies:assign 12345 33333
```

_See code: [src/commands/storage-policies/assign.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.1/src/commands/storage-policies/assign.js)_

## `box-u-ext storage-policies:assignments:get ID`

Get information on a storage policy assignment

```
USAGE
  $ box-u-ext storage-policies:assignments:get ID

ARGUMENTS
  ID  ID of the storage policy assignment to get

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
  box storage-policies:assignments:get 12345
```

_See code: [src/commands/storage-policies/assignments/get.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.1/src/commands/storage-policies/assignments/get.js)_

## `box-u-ext storage-policies:assignments:lookup ID`

Look up which storage policy an object is assigned to

```
USAGE
  $ box-u-ext storage-policies:assignments:lookup ID

ARGUMENTS
  ID  ID of the object to look up the storage policy for

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
  --type=user|enterprise                 (required) [default: user] Type of object to look up the storage policy for

EXAMPLE
  box storage-policies:assignments:lookup 33333
```

_See code: [src/commands/storage-policies/assignments/lookup.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.1/src/commands/storage-policies/assignments/lookup.js)_

## `box-u-ext storage-policies:assignments:remove ID`

Delete a storage policy assignment

```
USAGE
  $ box-u-ext storage-policies:assignments:remove ID

ARGUMENTS
  ID  ID of the storage policy assignment to delete

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
  box storage-policies:assignments:remove 12345
```

_See code: [src/commands/storage-policies/assignments/remove.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.1/src/commands/storage-policies/assignments/remove.js)_

## `box-u-ext storage-policies:get ID`

Get information on a storage policy

```
USAGE
  $ box-u-ext storage-policies:get ID

ARGUMENTS
  ID  ID of the storage policy to get

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
  box storage-policies:get 12345
```

_See code: [src/commands/storage-policies/get.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.1/src/commands/storage-policies/get.js)_
