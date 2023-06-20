'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./reach-tooltip.cjs.prod.js");
} else {
  module.exports = require("./reach-tooltip.cjs.dev.js");
}
