const chalk = require("chalk");
const { describe, demandOption, string } = require("yargs");

const yargs = require("yargs");
const { removeNotes } = require("./utils.js");
const notes = require("./utils.js");

yargs.command({
  command: "add",
  describe: "Add new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: "true",
      type: "string",
    },
    body: {
      describe: "Body",
      demandOption: "true",
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//remove
yargs.command({
  command: "remove",
  describe: "re,move note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNotes(argv.title);
  },
});

yargs.command({
  command: "read",
  describe: "read note",
  handler: function () {
    console.log("reading new note");
  },
});

yargs.command({
  command: "list",
  describe: "list note",
  handler: function () {
    console.log("listing new note");
  },
});

yargs.parse();
