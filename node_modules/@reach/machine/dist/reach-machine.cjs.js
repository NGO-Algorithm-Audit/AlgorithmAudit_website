'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./reach-machine.cjs.prod.js");
} else {
  module.exports = require("./reach-machine.cjs.dev.js");
}
