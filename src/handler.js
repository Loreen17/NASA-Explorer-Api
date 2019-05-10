const path = require('path');
const fs = require('fs');
const querystring = require('query-string');
const requester = require('request');
const url = require('url');
//const dotenv = require('dotenv').config()


const handlerHome = (request, response) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end('<h1> Sorry, there is Error </h1>');
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(file);
    }
  });
};

const handlerPublic = ((request, response, url) => {
  const extension = url.split('.')[1];
  const extenstionTypes = {
    html: 'text/html',
    js: 'application/javascript',
    css: 'text/css',
    jpg: 'image/jpg',
  };
  const filePath = path.join(__dirname, '..', url);
  fs.readFile(filePath, (err, file) => {
    if (err) {
      response.writeHead(404, { 'Content-Type': 'text/html' });
      response.end('<h1> Sorry , I can not find the file </h1>');
    } else {
      response.writeHead(200, { 'Content-Type': extenstionTypes[extension] });
      response.end(file);
    }
  });
});

const handlerSearch = ((request, response) => {
requester(myUrl, (err, res, body) => {
  //const myUrl = 'https://api.nasa.gov/planetary/apod';
  const parseData = JSON.parse(body);
  if (err) {
    console.log('err', err);
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('There is a server error');
  } else {
    const parseData = JSON.parse(body);
    let today = new Date().toISOString().slice(0, 10);

}
response.writeHead(200, { 'Content-Type': 'text/html' });
response.end(JSON.stringify());
});
})

module.exports = {
  handlerHome,
  handlerPublic,
  handlerSearch
};
