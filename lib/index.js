/**
  * @module BibcodeQueryLib
  *
  * this is done 2 3 4 5 6 7 8 9 0 11 12 13 14 15 16 17 18
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const BibcodeQueryBindingController = require('./Controllers/BibcodeQueryBindingController');
const ReturnBibcode = require('./Models/ReturnBibcode');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of BibcodeQueryLib
    Configuration,
    Environments,
    // controllers of BibcodeQueryLib
    BibcodeQueryBindingController,
    // models of BibcodeQueryLib
    ReturnBibcode,
    // exceptions of BibcodeQueryLib
    APIException,
};

module.exports = initializer;
