# Documentation
this is documentation for the module.json files amongst other things
## module.json
### install
install should be a path relative to the root directory of the module that points to an executable that should be run when the module is first loaded however it should not be expected that this script will only be run once nor should it be expected that it will be run every time before a module's init script is run
### init
init should be a path relative to the root directory of the module that points to an executable that will be run every time before the bot connects to discord
### module
module should be a path relative to the root directory of the module that points to a js file that will be imported into the bot said js file should have the following functions as applicable
#### middleware
middleware is a function that will be run on every message/event before any command, filter, etc and should be used to provide any sort of useful metadata to said commands, filters, ect, it can be used to set metadata that will disable other commands, manipulate the text that other commands will see(unless they read the raw message directly)
#### onmessage
onmessage will take an object as input with text message text and an object with metadata set by middleware
#### onevent
onevent will allow a module to take input about events other than messages such as a user joining a server, a user being kicked from the server, a user getting or having a role removed among other things
