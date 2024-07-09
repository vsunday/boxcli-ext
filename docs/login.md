`box-u-ext login`
=================

Sign in with OAuth and set a new environment or update an existing if reauthorize flag is used

* [`box-u-ext login`](#box-u-ext-login)

## `box-u-ext login`

Sign in with OAuth and set a new environment or update an existing if reauthorize flag is used

```
USAGE
  $ box-u-ext login

OPTIONS
  -c, --code         Manually visit authorize URL and input code
  -h, --help         Show CLI help
  -n, --name=name    [default: oauth] Set a name for the environment
  -p, --port=port    [default: 3000] Set the port number for the local OAuth callback server
  -q, --quiet        Suppress any non-error output to stderr
  -r, --reauthorize  Reauthorize the existing environment with given `name`
  -v, --verbose      Show verbose output, which can be helpful for debugging
  --no-color         Turn off colors for logging
```

_See code: [src/commands/login.js](https://github.com/vsunday/boxcli-ext/blob/v0.0.5/src/commands/login.js)_
