'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./reach-menu-button.cjs.prod.js");
} else {
  module.exports = require("./reach-menu-button.cjs.dev.js");
}
