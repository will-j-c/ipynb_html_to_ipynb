const fs = require("fs");
const process = require("node:process");


const { parse } = require("node-html-parser");
const 

const file = process.argv.pop();

async function logFile(file) {
  try {
    const filePath = resolve(file);
    const contents = await readFile(filePath);
    return contents;
  } catch (err) {
    console.error(err.message);
  }
}

logFile(file).then((value) => {
  const root = parse(value);
  const bodyNodes = root.querySelector("body").childNodes;
  let bodyNodesList = [];
  bodyNodes.forEach((node) => {
    if (node.constructor.name === "HTMLElement") {
      bodyNodesList.push(node);
    }
    
  });
  console.log(bodyNodesList[6].classList.value)
});