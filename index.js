const express = require('express');
const db = require('./config/connection');
const controllers = require('./controllers');

const cwd = process.cwd();

const PORT = 3001;
const app = express();