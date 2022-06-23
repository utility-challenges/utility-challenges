const fs = require("fs");

const choices = fs.readdirSync("questions");

module.exports = [
  {
    type: "select",
    name: "category",
    message: "Which category",
    choices,
  },
  {
    type: "input",
    name: "name",
    message: "What's question name",
  },
];
