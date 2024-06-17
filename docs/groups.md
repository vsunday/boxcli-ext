`box-u-ext groups`
==================

List all groups

* [`box-u-ext groups`](#box-u-ext-groups)
* [`box-u-ext groups:collaborations ID`](#box-u-ext-groupscollaborations-id)
* [`box-u-ext groups:create NAME`](#box-u-ext-groupscreate-name)
* [`box-u-ext groups:delete ID`](#box-u-ext-groupsdelete-id)
* [`box-u-ext groups:get ID`](#box-u-ext-groupsget-id)
* [`box-u-ext groups:memberships ID`](#box-u-ext-groupsmemberships-id)
* [`box-u-ext groups:memberships:add USERID GROUPID`](#box-u-ext-groupsmembershipsadd-userid-groupid)
* [`box-u-ext groups:memberships:get ID`](#box-u-ext-groupsmembershipsget-id)
* [`box-u-ext groups:memberships:remove ID`](#box-u-ext-groupsmembershipsremove-id)
* [`box-u-ext groups:memberships:update ID`](#box-u-ext-groupsmembershipsupdate-id)
* [`box-u-ext groups:terminate-session`](#box-u-ext-groupsterminate-session)
* [`box-u-ext groups:update ID`](#box-u-ext-groupsupdate-id)

## `box-u-ext groups`

List all groups

```
USAGE
  $ box-u-ext groups

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
  --filter=filter                        Search term to filter groups on; matches prefixes of group name
  --json                                 Output formatted JSON

  --max-items=max-items                  A value that indicates the maximum number of results to return. This only
                                         specifies a maximum boundary and will not guarantee the minimum number of
                                         results returned. When the max-items (x) is greater than 1000, then the maximum
                                         ceil(x/1000) requests will be made.

  --no-color                             Turn off colors for logging

  --save-to-file-path=save-to-file-path  Override default file path to save report

ALIASES
  $ box-u-ext groups:list

EXAMPLE
  box groups
```

_See code: [src/commands/groups/index.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.4/src/commands/groups/index.js)_

## `box-u-ext groups:collaborations ID`

List collaborations for a group

```
USAGE
  $ box-u-ext groups:collaborations ID

ARGUMENTS
  ID  ID of the group to get collaborations for

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
  $ box-u-ext groups:list-collaborations
  $ box-u-ext collaborations:list-for-group

EXAMPLE
  box groups:collaborations 12345
```

_See code: [src/commands/groups/collaborations.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.4/src/commands/groups/collaborations.js)_

## `box-u-ext groups:create NAME`

Create a group

```
USAGE
  $ box-u-ext groups:create NAME

ARGUMENTS
  NAME  Group name

OPTIONS
  -h, --help                                                           Show CLI help
  -i, --invite=admins_only|admins_and_members|all_managed_users        Specifies who can invite the group to collaborate
  -m, --view-members=admins_only|admins_and_members|all_managed_users  Specifies who can view the members of the group
  -q, --quiet                                                          Suppress any non-error output to stderr
  -s, --save                                                           Save report to default reports folder on disk
  -t, --token=token                                                    Provide a token to perform this call

  -v, --verbose                                                        Show verbose output, which can be helpful for
                                                                       debugging

  -y, --yes                                                            Automatically respond yes to all confirmation
                                                                       prompts

  --as-user=as-user                                                    Provide an ID for a user

  --bulk-file-path=bulk-file-path                                      File path to bulk .csv or .json objects

  --csv                                                                Output formatted CSV

  --description=description                                            Description of the group

  --external-sync-identifier=external-sync-identifier                  Group identifier for groups coming from an
                                                                       external source

  --fields=fields                                                      Comma separated list of fields to show

  --id-only                                                            Return only an ID to output from this command

  --json                                                               Output formatted JSON

  --no-color                                                           Turn off colors for logging

  --provenance=provenance                                              Track the external source where the group is
                                                                       coming from

  --save-to-file-path=save-to-file-path                                Override default file path to save report

EXAMPLE
  box groups:create "US Employees"
```

_See code: [src/commands/groups/create.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.4/src/commands/groups/create.js)_

## `box-u-ext groups:delete ID`

Delete a group

```
USAGE
  $ box-u-ext groups:delete ID

ARGUMENTS
  ID  ID of the group to delete

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
  box groups:delete 12345
```

_See code: [src/commands/groups/delete.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.4/src/commands/groups/delete.js)_

## `box-u-ext groups:get ID`

Get information about a group

```
USAGE
  $ box-u-ext groups:get ID

ARGUMENTS
  ID  ID of the group to get

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
  box groups:get 12345
```

_See code: [src/commands/groups/get.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.4/src/commands/groups/get.js)_

## `box-u-ext groups:memberships ID`

List members of a group

```
USAGE
  $ box-u-ext groups:memberships ID

ARGUMENTS
  ID  ID of the group to get memberships for

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
  $ box-u-ext groups:membership:list

EXAMPLE
  box groups:memberships 12345
```

_See code: [src/commands/groups/memberships/index.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.4/src/commands/groups/memberships/index.js)_

## `box-u-ext groups:memberships:add USERID GROUPID`

Add a user to a group

```
USAGE
  $ box-u-ext groups:memberships:add USERID GROUPID

ARGUMENTS
  USERID   ID of the user to add to the group
  GROUPID  ID of the group to add the user to

OPTIONS
  -h, --help                             Show CLI help
  -q, --quiet                            Suppress any non-error output to stderr
  -r, --role=member|admin                [default: member] Set the user's role in the group
  -s, --save                             Save report to default reports folder on disk
  -t, --token=token                      Provide a token to perform this call
  -v, --verbose                          Show verbose output, which can be helpful for debugging
  -y, --yes                              Automatically respond yes to all confirmation prompts
  --as-user=as-user                      Provide an ID for a user
  --bulk-file-path=bulk-file-path        File path to bulk .csv or .json objects
  --[no-]can-create-accounts             If the user is a group admin, allow them to create new users
  --[no-]can-edit-accounts               If the user is a group admin, allow them to edit user accounts
  --[no-]can-instant-login               If the user is a group admin, allow them to instant login
  --[no-]can-run-reports                 If the user is a group admin, allow them to run reports
  --csv                                  Output formatted CSV
  --fields=fields                        Comma separated list of fields to show
  --json                                 Output formatted JSON
  --no-color                             Turn off colors for logging
  --save-to-file-path=save-to-file-path  Override default file path to save report

ALIASES
  $ box-u-ext groups:membership:add

EXAMPLE
  box groups:memberships:add 33333 12345
```

_See code: [src/commands/groups/memberships/add.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.4/src/commands/groups/memberships/add.js)_

## `box-u-ext groups:memberships:get ID`

Get information about a group membership

```
USAGE
  $ box-u-ext groups:memberships:get ID

ARGUMENTS
  ID  ID of the group membership to get

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
  $ box-u-ext groups:membership:get

EXAMPLE
  box groups:memberships:get 12345
```

_See code: [src/commands/groups/memberships/get.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.4/src/commands/groups/memberships/get.js)_

## `box-u-ext groups:memberships:remove ID`

Remove a user from a group

```
USAGE
  $ box-u-ext groups:memberships:remove ID

ARGUMENTS
  ID  ID of the group membership record to delete

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
  $ box-u-ext groups:membership:remove

EXAMPLE
  box groups:memberships:remove 12345
```

_See code: [src/commands/groups/memberships/remove.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.4/src/commands/groups/memberships/remove.js)_

## `box-u-ext groups:memberships:update ID`

Update a user's membership to a group

```
USAGE
  $ box-u-ext groups:memberships:update ID

ARGUMENTS
  ID  ID of the group membership to update

OPTIONS
  -h, --help                             Show CLI help
  -q, --quiet                            Suppress any non-error output to stderr
  -r, --role=member|admin                Set the user's role in the group
  -s, --save                             Save report to default reports folder on disk
  -t, --token=token                      Provide a token to perform this call
  -v, --verbose                          Show verbose output, which can be helpful for debugging
  -y, --yes                              Automatically respond yes to all confirmation prompts
  --as-user=as-user                      Provide an ID for a user
  --bulk-file-path=bulk-file-path        File path to bulk .csv or .json objects
  --[no-]can-create-accounts             If the user is a group admin, allow them to create new users
  --[no-]can-edit-accounts               If the user is a group admin, allow them to edit user accounts
  --[no-]can-instant-login               If the user is a group admin, allow them to instant login
  --[no-]can-run-reports                 If the user is a group admin, allow them to run reports
  --csv                                  Output formatted CSV
  --fields=fields                        Comma separated list of fields to show
  --json                                 Output formatted JSON
  --no-color                             Turn off colors for logging
  --save-to-file-path=save-to-file-path  Override default file path to save report

ALIASES
  $ box-u-ext groups:membership:update

EXAMPLE
  box groups:memberships:update
```

_See code: [src/commands/groups/memberships/update.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.4/src/commands/groups/memberships/update.js)_

## `box-u-ext groups:terminate-session`

Validates the roles and permissions of the group, and creates asynchronous jobs to terminate the group's sessions.

```
USAGE
  $ box-u-ext groups:terminate-session

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
  --group-ids=group-ids                  (required) A list of group IDs
  --json                                 Output formatted JSON
  --no-color                             Turn off colors for logging
  --save-to-file-path=save-to-file-path  Override default file path to save report

ALIASES
  $ box-u-ext groups:terminate-session

EXAMPLE
  box groups:terminate-session --group-ids 123 345
```

_See code: [src/commands/groups/terminate-session.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.4/src/commands/groups/terminate-session.js)_

## `box-u-ext groups:update ID`

Update a group

```
USAGE
  $ box-u-ext groups:update ID

ARGUMENTS
  ID  ID of the group to update

OPTIONS
  -h, --help                                                           Show CLI help
  -i, --invite=admins_only|admins_and_members|all_managed_users        Specifies who can invite the group to collaborate
  -m, --view-members=admins_only|admins_and_members|all_managed_users  Specifies who can view the members of the group
  -n, --name=name                                                      The name of the group
  -q, --quiet                                                          Suppress any non-error output to stderr
  -s, --save                                                           Save report to default reports folder on disk
  -t, --token=token                                                    Provide a token to perform this call

  -v, --verbose                                                        Show verbose output, which can be helpful for
                                                                       debugging

  -y, --yes                                                            Automatically respond yes to all confirmation
                                                                       prompts

  --as-user=as-user                                                    Provide an ID for a user

  --bulk-file-path=bulk-file-path                                      File path to bulk .csv or .json objects

  --csv                                                                Output formatted CSV

  --description=description                                            Description of the group

  --external-sync-identifier=external-sync-identifier                  group identifier for groups coming from an
                                                                       external source

  --fields=fields                                                      Comma separated list of fields to show

  --json                                                               Output formatted JSON

  --no-color                                                           Turn off colors for logging

  --provenance=provenance                                              Track the external source where the group is
                                                                       coming from

  --save-to-file-path=save-to-file-path                                Override default file path to save report

EXAMPLE
  box groups:update 12345 --name "U.S. Employees"
```

_See code: [src/commands/groups/update.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.4/src/commands/groups/update.js)_
