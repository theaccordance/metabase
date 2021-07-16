mbimport
========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mbimport.svg)](https://npmjs.org/package/mbimport)
[![Downloads/week](https://img.shields.io/npm/dw/mbimport.svg)](https://npmjs.org/package/mbimport)
[![License](https://img.shields.io/npm/l/mbimport.svg)](https://github.com/metabase/mbimport/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mbimport
$ mbimport COMMAND
running command...
$ mbimport (-v|--version|version)
mbimport/0.0.0 darwin-x64 node-v14.12.0
$ mbimport --help [COMMAND]
USAGE
  $ mbimport COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mbimport hello [FILE]`](#mbimport-hello-file)
* [`mbimport help [COMMAND]`](#mbimport-help-command)

## `mbimport hello [FILE]`

describe the command here

```
USAGE
  $ mbimport hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ mbimport hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/metabase/mbimport/blob/v0.0.0/src/commands/hello.ts)_

## `mbimport help [COMMAND]`

display help for mbimport

```
USAGE
  $ mbimport help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
