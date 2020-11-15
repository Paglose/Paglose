# Paglose
this is my discord bot because why not
## how does this work?
every child folder is a separate git submodule to try and maximize modularity, each module must have at a minimum a module.json file in it, the module.json will specify what the module needs, the version and some potentially important files, the files that can be specified are the "install" script(optional), the "init" script(optional), a "cleanup" script(optional) which will be run whenever the bot shuts down if possible and the "module" script it should also have a "requires" entry(optional) which includes every requirement with each requirement specifying how the needs is requires are to be indicated to be met(indicator_module, indicator_method or indicator script) and in the cases of the indicator module or method will specify the types of args an example of this file being

    {

	    version: "1.0.0",

	    init: "init.sh",
	    
	    module: "index.js"
	    
	    requires:{

		mongodb:{
		
		    indicator_module: "mongo.js",
		    
		    args: ["String"]
		
		}
	    
	    }

    }

the main file will use these module.json files to initialize the modules
## compiling
use the tsc command to compile into js files then move whatever modules you want into the out directory and move the out directory wherever you want to run the bot from
