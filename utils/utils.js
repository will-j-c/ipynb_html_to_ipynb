const { resolve } = require('node:path');
const { readFileSync } = require('node:fs');

const utils = {
  htmlToJSON: () => {},
  openFile: (file) => {
    try {
      const filePath = resolve(file);
      const contents = readFileSync(filePath, 'utf8');
      return contents;

    } catch (err) {
      console.error(err.message);
    }
  },
};

module.exports = utils;
