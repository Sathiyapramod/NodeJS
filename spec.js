const os =  require('os');
//inbuilt package inside NodeJS
//It has four functions in it 
//1. freemen() - to display freememory in system
//2. totalmem() - to display total memory

//Free memory - os.freemem() - value in bytes
console.log(`Free memory is ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`);

//Total memory - os.totalmem() - value in bytes
console.log(`Total memory is ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`);

//Version Details - os.version()
console.log(`version is`, os.version());

//CPU details - os.cpus()
console.log("CPU",os.cpus());

//Due to 8 core inside the CPU, 
//each core will have 2 threads for various functions 
//each core will run for silent operations inside CPU