const quote = "Ad fugiat reprehenderit ea sit tempor officia ipsum in magna.";

const fs = require("fs");

fs.writeFile("./awesome.html", quote, (err) => {
  console.log("completed writing");
});

//Task-1 - create 10 files

const quote2 = "Live more, Worry less ! 😀";

for (let i = 1; i <= process.argv[2]; i++) {
  fs.writeFile(`./backup/text-${i}.html`, quote2, (err) => {
    console.log("Completed writing");
  });
}

// //Task-2
const [, , noOfFiles] = process.argv;
console.log(noOfFiles);

//READING

fs.readFile("./cool.txt", "UTF-8", (err, data) => {
  if (err) console.log("error is", err);
  console.log(data);
});

//Updating a file

const data = "Good evening ";

fs.appendFile("./super.html", "\n" + data, (err) => {
  console.log("completed writing");
});

//Deleting Files

fs.unlink("./cool.txt", (err) => {
  if (err) console.log(err);
  else console.log("Deleted successfully");
});

for (let i = 1; i <= 50; i++) {
  fs.unlink(`./backup/text-${i}.html`, (err) => {
    if (err) console.log(err);
    else console.log("Deleted");
  });
}
