'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./reach-dropdown.cjs.prod.js");
} else {
  module.exports = require("./reach-dropdown.cjs.dev.js");
}
