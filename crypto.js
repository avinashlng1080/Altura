'use strict';
import {Buffer} from 'buffer';

const {NativeModules} = require('react-native');

const randomBytes = size => {
  if (NativeModules.RNGetRandomValues) {
    return Buffer(NativeModules.RNGetRandomValues.getRandomBase64(size));
  } else {
    throw new Error('Native module not found');
  }
};

exports.randomBytes =
  exports.rng =
  exports.pseudoRandomBytes =
  exports.prng =
    randomBytes;
