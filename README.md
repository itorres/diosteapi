# Diosteapi

npm init
npm install elasticsearch --save
npm install get-json --save
npm install yargs --save

## Usage

```
var client=require ('./connection.js');
var argv = require('yargs').argv;
```

## Files

* connection.js - connection settings
* addquote.js - add quote to system
* delquote.js - delete quote by `id` number
* rquote.js - show random quote
* quote.js - search a `$word` in quotes   
* aquote.js - search a quote by `$author`


## Queries

* quote - random quote
* quote $word
* quote $author
* quote $id 
* addquote - add quote
* delquote $id - delete quote 

Usage:

```
node app.js 
--quote=culo //  word search
--aquote=jopi // author search
--iquote=1234 // id search
--rquote // random quote

```
