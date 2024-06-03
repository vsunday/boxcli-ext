`box-u-ext sign-templates`
==========================

List sign templates

* [`box-u-ext sign-templates`](#box-u-ext-sign-templates)
* [`box-u-ext sign-templates:get ID`](#box-u-ext-sign-templatesget-id)

## `box-u-ext sign-templates`

List sign templates

```
USAGE
  $ box-u-ext sign-templates

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
  --limit=limit                          The maximum number of items to return per page.

  --marker=marker                        Defines the position marker at which to begin returning results. This is used
                                         when paginating using marker-based pagination. This requires `usemarker` to be
                                         set to `true`.

  --no-color                             Turn off colors for logging

  --save-to-file-path=save-to-file-path  Override default file path to save report

EXAMPLE
  box sign-templates
```

_See code: [src/commands/sign-templates/index.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.1/src/commands/sign-templates/index.js)_

## `box-u-ext sign-templates:get ID`

Get sign template by ID

```
USAGE
  $ box-u-ext sign-templates:get ID

ARGUMENTS
  ID  The ID of the sign template

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
  box sign-templates:get 12345
```

_See code: [src/commands/sign-templates/get.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.1/src/commands/sign-templates/get.js)_
