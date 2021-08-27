const fs = require('fs');
let args = process.argv.splice(2), col; //file - col - key

if(args.length != 3) return console.error("Wrong number of arguments.");
if(!fs.existsSync(args[0])) return console.error("File not found.");
if(!(col = parseInt(args[1]))) return console.error("The second arg should be a number");

let rl = require('readline').createInterface({
    input: fs.createReadStream(args[0])
});

rl.on('line', function(line){
    let data = line.replace(';', '').split(',');
    if(data.length-1 < col) return; //the column is wrong - keeps searching anyways cause it could be the line wrong
    
    if(data[col] == args[2]){
        console.log(line);
        rl.close();
    }
})