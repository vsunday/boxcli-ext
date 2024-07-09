`box-u-ext webhooks`
====================

List all webhooks

* [`box-u-ext webhooks`](#box-u-ext-webhooks)
* [`box-u-ext webhooks:create TARGETTYPE TARGETID`](#box-u-ext-webhookscreate-targettype-targetid)
* [`box-u-ext webhooks:delete ID`](#box-u-ext-webhooksdelete-id)
* [`box-u-ext webhooks:get ID`](#box-u-ext-webhooksget-id)
* [`box-u-ext webhooks:update ID`](#box-u-ext-webhooksupdate-id)

## `box-u-ext webhooks`

List all webhooks

```
USAGE
  $ box-u-ext webhooks

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
  $ box-u-ext webhooks:list

EXAMPLE
  box webhooks
```

_See code: [src/commands/webhooks/index.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.5/src/commands/webhooks/index.js)_

## `box-u-ext webhooks:create TARGETTYPE TARGETID`

Create a new webhook

```
USAGE
  $ box-u-ext webhooks:create TARGETTYPE TARGETID

ARGUMENTS
  TARGETTYPE  (file|folder) Type of Box item to create a webhook on
  TARGETID    ID of the Box item to create a webhook on

OPTIONS
  -T, --triggers=triggers                (required) Triggers for webhook as a comma separated list, e.g.
                                         FILE.DELETED,FILE.PREVIEWED

  -a, --address=address                  (required) URL for your webhook handler

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

  --no-color                             Turn off colors for logging

  --save-to-file-path=save-to-file-path  Override default file path to save report

EXAMPLE
  box webhooks:create folder 22222 --triggers FILE.DELETED --address https://example.com/webhook/deletion
```

_See code: [src/commands/webhooks/create.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.5/src/commands/webhooks/create.js)_

## `box-u-ext webhooks:delete ID`

Delete a webhook

```
USAGE
  $ box-u-ext webhooks:delete ID

ARGUMENTS
  ID  ID of the webhook to delete

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
  box webhooks:delete 12345
```

_See code: [src/commands/webhooks/delete.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.5/src/commands/webhooks/delete.js)_

## `box-u-ext webhooks:get ID`

Get information about a webhook

```
USAGE
  $ box-u-ext webhooks:get ID

ARGUMENTS
  ID  ID of the webhook to get

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
  box webhooks:get 12345
```

_See code: [src/commands/webhooks/get.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.5/src/commands/webhooks/get.js)_

## `box-u-ext webhooks:update ID`

Update a webhook

```
USAGE
  $ box-u-ext webhooks:update ID

ARGUMENTS
  ID  ID of the webhook to update

OPTIONS
  -T, --triggers=triggers                Triggers for webhook, enter as comma separated list. For example:
                                         FILE.DELETED,FILE.PREVIEWED

  -a, --address=address                  URL for your webhook handler

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
  box webhooks:update 12345 --triggers FILE.DELETED,FOLDER.DELETED
```

_See code: [src/commands/webhooks/update.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.5/src/commands/webhooks/update.js)_
