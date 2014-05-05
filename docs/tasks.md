# Grunt tasks

This application uses [Grunt][grunt] to automate the workflow.
Here I'll explain what tasks are available and what they do.

## Default
By default, it executes the [compile][compile] task
``` bash
grunt
```

## Compile ##
This command creates the final webpage that you can deploy to production.
``` bash
grunt compile
```
In order to execute this task you'll need the next libraries:

 - [Bower][bower]
 - [Compass][compass]

## Server
If you are developing, this is your command.
``` bash
grunt server
```
It makes your life so much easier, this will compile everything for you as soon as you save any development file.

[grunt]: http://gruntjs.com
[compile]: #compile
[bower]: http://bower.io
[compass]: http://compass-style.org/