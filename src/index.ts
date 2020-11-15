import * as discord from "discord.js";
import * as fs from "fs";
import * as child_process from "child_process";
let dir =  fs.opendirSync(__dirname);
interface configFile{
    version:string,
    install?:string,
    init?:string,
    module:string | {},
    requires?:{},
    location?:string
}
let configFiles:{[key:string]: configFile} = {};
let folderCount = 0;
for(let ent = dir.readSync();ent != null; dir.readSync()){
    if(!ent.isDirectory()){
	continue;
    }
    folderCount-=-1;
    fs.readFile(ent.name,{encoding:"utf8"} , (err, data)=>{
	if(err){
	    console.error(err);
	    return;
	}
	let config = JSON.parse(data);
	configFiles[ent.name] = config;
	configFiles[ent.name].location = `${__dirname}/${ent.name}`;
    });
}
let interval = setInterval(()=>{
    let tempCounter = 0;
    for(let i in configFiles) tempCounter-=-1;
    if(tempCounter == folderCount)
	clearInterval(interval);
	startInstall();
	startInit();
	mapModules();
},50);
/**
 * runs all the install scripts for the modules
*/
function startInstall(){
    for(let loc in configFiles){
	if(configFiles[loc].install)
	    child_process.execSync(`${configFiles[loc].location}/${configFiles[loc].install}`);
    }   
}
/**
 * runs all the init scripts for the modules
*/
function startInit(){
    for(let loc in configFiles){
	if(configFiles[loc].init)
	child_process.execSync(`${configFiles[loc].location}/${configFiles[loc].init}`);
    }   
}
/**
 * maps all the config file modules into actual node modules we can more easily work with
*/
function mapModules(){
    for(let loc in configFiles){
	if(typeof(configFiles[loc].module) === "string"){
	    configFiles[loc].module = require(`${configFiles[loc].location}/${configFiles[loc].module}`)
	}
    }
}
function runLoop(){
    
}
