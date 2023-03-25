const utils = require('../utils/utils');
const { glob } = require('glob');

async function getJsonObjects() {
  const jsonDict = { top_level_structure: '1', markdown_cell: '2' };
  const files = await glob('json/*.json');
  const objects = [];

  files.forEach((file) => {
    const contents = utils.openFile(file);
    const object = JSON.parse(contents);
    const fileName = file.split('/')[1].split('.')[0];
    objects.push([fileName, object])
  });

  objects.forEach(object => {
    jsonDict[object[0]] = object[1]
  });

  return jsonDict;
}

getJsonObjects().then((value) => console.log('Value: ', value));
