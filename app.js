// var express = require('express');
// var app = express();
var client = require('./connection.js');
var argv = require('yargs').argv;
var functions = require('./functions.js');

/* if (argv.search) {
  var quoteLookup=argv.search;
  console.log("Search term: "+quoteLookup);
  results(quoteLookup);
} */

// function search word in quote

if (argv.quote) {
  functions.quote(argv.quote, function(quote) {
      console.log(results);
  });
} 

// function search quote by author
if (argv.aquote) {
  functions.aquote(argv.aquote, function(aquote) {
    console.log(aquote);
 });
}

// function search quote by id
if (argv.iquote) {
  functions.iquote(argv.iquote, function(iquote) {
    console.log(iquote);
 });
}

// function random quote
if (argv.rquote) {
  functions.rquote(function(rquote) {
     console.log(rquote);
  });
}

// function addquote 
if (argv.addquote) {
  functions.addquote(argv.addquote, function(addquote) {
    console.log(addquote);
 });
}

// function delquote 
if (argv.delquote) {
  functions.delquote(argv.delquote, function(delquote) {
    console.log(delquote);
 });
}

// ADD THESE TWO LINES
//app.use('/rquote', results);
//module.exports = app;
